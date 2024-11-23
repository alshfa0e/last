import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { systemPrompt } from '../constants/prompts';

interface Message {
  sender: string;
  content: string;
}

const LoadingIndicator = () => (
  <div className="flex justify-center p-4">
    <img
      src="https://raw.githubusercontent.com/alshfa0e/fa-ain-chatbot/main/IMG_0207_transparent.png"
      alt="Loading..."
      className="w-12 h-12 animate-spin"
    />
  </div>
);

const formatMessage = (content: string) => {
  return content
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/###\s*(.*?)(?=\n|$)/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
};

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatboxRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const apiKey = 'xai-ZFV2ONv0AfOlJDgd6LykCwbZX22YgwJE5i324dJ8dm0O8geH1m9Z2F13pXbOuRTy8kHtZoUnttJvqS3M';

  // Auto-resize textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  // Scroll chat to bottom when new messages arrive
  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  const saveConversation = async (newMessages: Message[]) => {
    try {
      const conversationData = {
        messages: newMessages.map(msg => ({
          sender: msg.sender,
          content: msg.content,
          timestamp: new Date().toISOString()
        })),
        startedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'active',
        platform: 'web',
        metadata: {
          userAgent: navigator.userAgent,
          language: navigator.language
        }
      };

      await addDoc(collection(db, 'conversations'), conversationData);
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  };

  const saveContact = async (name: string, contact: string) => {
    try {
      const contactData = {
        name,
        contact,
        createdAt: new Date().toISOString(),
        status: 'new',
        source: 'chat',
        metadata: {
          userAgent: navigator.userAgent,
          language: navigator.language
        }
      };

      await addDoc(collection(db, 'contacts'), contactData);
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      sender: 'You',
      content: inputValue.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Check for contact information
    const contactMatch = userMessage.content.match(/my contact is\s+([^-]+)-\s*(.+)/i);
    if (contactMatch) {
      const [, name, contact] = contactMatch;
      await saveContact(name.trim(), contact.trim());
      const botResponse = {
        sender: 'FA',
        content: 'Thank you! Our team will reach out to you shortly to discuss your needs in detail.'
      };
      setMessages(prev => [...prev, botResponse]);
      await saveConversation([...messages, userMessage, botResponse]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            ...messages.map(msg => ({
              role: msg.sender === 'You' ? 'user' : 'assistant',
              content: msg.content
            })),
            { role: 'user', content: userMessage.content }
          ],
          model: 'grok-beta',
          stream: false,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const botMessage = {
        sender: 'FA',
        content: data.choices[0].message.content.trim()
      };

      const updatedMessages = [...messages, userMessage, botMessage];
      setMessages(updatedMessages);
      await saveConversation(updatedMessages);
    } catch (error) {
      console.error('Error communicating with the API:', error);
      const errorMessage = {
        sender: 'FA',
        content: 'I apologize, but I encountered an error. Please try again or contact our support team.'
      };
      const updatedMessages = [...messages, userMessage, errorMessage];
      setMessages(updatedMessages);
      await saveConversation(updatedMessages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-[#003f8a] to-[#002a5c] p-4">
        <h2 className="text-white text-xl font-bold">Chat with FA</h2>
      </div>
      
      <div 
        ref={chatboxRef} 
        className="flex-1 p-4 overflow-y-auto space-y-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.sender === 'You'
                  ? 'bg-[#003f8a] text-white rounded-br-none'
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              <p 
                className="text-sm whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: formatMessage(message.content) }}
              />
            </div>
          </div>
        ))}
        {isLoading && <LoadingIndicator />}
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message... (Shift + Enter for new line)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003f8a] resize-none overflow-hidden min-h-[44px] max-h-[200px]"
              style={{ lineHeight: '1.5' }}
              rows={1}
            />
          </div>
          <button
            onClick={handleSend}
            className="bg-[#003f8a] text-white p-2 rounded-lg hover:bg-[#002a5c] transition-colors self-end h-[44px] w-[44px] flex items-center justify-center"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;