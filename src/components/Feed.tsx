// src/components/Feed.tsx
import Post from './Post';

export default function Feed() {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow">
        <textarea
          placeholder="What's on your mind?"
          className="w-full border rounded p-2 text-sm"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>Friends and Networks ▼</span>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Share</button>
        </div>
      </div>

      {/* Mock posts */}
      <Post
        name="Priscilla Chan"
        content="hi!"
        timestamp="Sat at 10:52am"
      />
      <Post
        name="Robert Scoble"
        content="Photowalk around Facebook's new headquarters"
        timestamp="June 3 at 12:02am"
      />
    </div>
  );
}
