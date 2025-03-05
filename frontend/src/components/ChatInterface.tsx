import React, { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      // TODO: AIサービスとの連携を実装
      const response: Message = { 
        role: 'assistant', 
        content: 'この部分は後でAI応答に置き換えます。' 
      };
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('メッセージの送信に失敗しました:', error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="メッセージを入力..."
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default ChatInterface;