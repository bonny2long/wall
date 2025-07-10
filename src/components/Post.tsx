'use client'; // Ensure this is present if it's a client component

type PostProps = {
  id: string;
  name: string;
  content: string;
  timestamp: string;
  imageUrl?: string;
  onDelete?: (id: string) => void; // Added onDelete prop
};

export default function Post({ id, name, content, timestamp, imageUrl, onDelete }: PostProps) {
  return (
    <div className="bg-white p-4 rounded shadow text-sm space-y-2">
      <div className="font-semibold">{name}</div>
      <div className="text-gray-600">{content}</div>

      {imageUrl && (
        <img
          src={imageUrl}
          alt="User upload"
          className="rounded max-h-80 w-full object-cover border"
        />
      )}

      <div className="text-xs text-gray-500 flex justify-between pt-1">
        <span>{timestamp} · Comment · Like</span>
        {/* Only show delete button if onDelete function is provided */}
        {onDelete && (
          <button
            onClick={() => onDelete(id)} // Call the onDelete function with the post's ID
            className="text-blue-600 hover:underline ml-2"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}