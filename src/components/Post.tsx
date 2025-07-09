// src/components/Post.tsx

type PostProps = {
  id: number;
  name: string;
  content: string;
  timestamp: string;
  onDelete?: (id: number) => void; // optional for flexibility
};

export default function Post({ id, name, content, timestamp, onDelete }: PostProps) {
  return (
    <div className="bg-white p-4 rounded shadow text-sm">
      <div className="font-semibold">{name}</div>
      <div className="text-gray-600">{content}</div>
      <div className="text-xs text-gray-500 mt-1 flex justify-between">
        <span>{timestamp} · Comment · Like</span>
        {onDelete && (
          <button
            onClick={() => onDelete(id)}
            className="text-blue-600 hover:underline ml-2"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
