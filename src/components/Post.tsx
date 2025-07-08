// src/components/Post.tsx
type PostProps = {
    name: string;
    content: string;
    timestamp: string;
  };
  
  export default function Post({ name, content, timestamp }: PostProps) {
    return (
      <div className="bg-white p-4 rounded shadow text-sm">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-600">{content}</div>
        <div className="text-xs text-gray-500 mt-1">{timestamp} · Comment · Like</div>
      </div>
    );
  }
  