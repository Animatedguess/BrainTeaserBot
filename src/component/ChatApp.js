import React, { useState, useEffect } from 'react';
import { geminiAi } from '../Data/geminiAi';
import ReactMarkdown from 'react-markdown';

const Message = ({ text, isUser }) => {
  return (
    <div
      className={`max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-4 my-2 p-3 rounded-2xl ${isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200 text-black self-start'
        }`}
    >
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

const ChatWindow = ({ messages }) => {
  return (
    <div className="flex flex-col h-5/6 p-4 space-y-2 overflow-y-auto">
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
};

const ChatInput = ({ onSendMessage, bothCall }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-300">
      <input
        type="text"
        className="flex-grow p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your message..."
      />
      <button
        onClick={() => bothCall(input, handleSend)}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

const ChatApp = ({ initialMessages = [] }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [fetched, setFetched] = useState(false);
  const [context, setContext] = useState('');

  useEffect(() => {
    if (fetched && context) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: context, isUser: false },
      ]);
      setFetched(false); // Reset fetched state
    }
  }, [fetched, context]);

  const bothCall = async (input, handleSend) => {
    handleSend(); // Sends the user's message immediately

    try {
      const response = await geminiAi(input);
      setContext(response);
      setFetched(true); // Trigger the useEffect to add the AI response
    } catch (error) {
      console.error("Error fetching data:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Sorry, something went wrong. Please try again.', isUser: false },
      ]);
    }
  };

  const handleSendMessage = (text) => {
    setMessages([...messages, { text, isUser: true }]);
  };

  return (
    <div className="flex flex-col bg-opacity-45 h-[600px] bg-slate-50 max-w-screen-md mx-auto border border-gray-300 rounded-lg shadow-lg">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} bothCall={bothCall} />
    </div>
  );
};

export default ChatApp;
