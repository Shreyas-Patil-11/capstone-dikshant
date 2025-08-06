import React, { useEffect, useRef, useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I'm your AI assistant for cybersecurity. What's on your mind today?",
      timestamp: new Date(),
    },
    {
      sender: 'user',
      text: 'What is phishing and how can I protect myself from it?',
      timestamp: new Date(),
    },
    {
      sender: 'ai',
      text: "Phishing is a scam attempt to trick users into giving away info. Don’t click suspicious links or emails!",
      timestamp: new Date(),
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI typing
    setTimeout(() => {
      const aiResponse = {
        sender: 'ai',
        text: 'Thank you for your question. A real-time AI response would be generated here.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="w-full h-[70vh] bg-white rounded-3xl shadow-lg flex flex-col border border-gray-200">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-gray-50">
        <span className="text-xl font-bold text-gray-800">Cybersense Chat</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-xl p-3 text-sm max-w-[75%] ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
              <p>{msg.text}</p>
              <span className="block text-xs mt-1 text-gray-400">{msg.timestamp.toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 flex items-center space-x-3">
        <input
          type="text"
          className="flex-1 py-2 px-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Ask me about cybersecurity..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded-full text-white transition ${input ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          disabled={!input}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
