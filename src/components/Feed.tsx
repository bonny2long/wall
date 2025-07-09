// src/components/Feed.tsx
'use client';

import { useState } from 'react';
import Post from './Post';

type Message = {
  id: number;
  content: string;
  timestamp: string;
};

export default function Feed() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleShare = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    if (trimmed.length > 280) return;

    const newMessage: Message = {
      id: Date.now(), // unique enough for now
      content: trimmed,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([newMessage, ...messages]);
    setInput('');
  };

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full border rounded p-2 text-sm"
          maxLength={280}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>{280 - input.length} characters left</span>
          <button
            onClick={handleShare}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
            disabled={!input.trim()}
          >
            Share
          </button>
        </div>
      </div>

      {/* Live feed */}
      {messages.map((msg) => (
        <Post
          key={msg.id}
          name="Bonny Makaniankhondo"
          content={msg.content}
          timestamp={msg.timestamp}
        />
      ))}
    </div>
  );
}
