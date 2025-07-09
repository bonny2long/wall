// src/components/Sidebar.tsx
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="bg-white rounded-lg p-4 shadow text-sm space-y-4 text-center">
      {/* 🧑 Facebook Profile Section */}
      <div className="space-y-1">
        <Image
          src="/assets/profile-pic.webp"
          alt="Bonny"
          width={160}
          height={200}
          className="mx-auto rounded-sm border"
        />
        <p className="font-semibold">Bonny Makaniankhondo</p>
        <p className="text-xs text-blue-600 hover:underline cursor-pointer">
          View my profile
        </p>
      </div>

      {/* 📌 Favorites */}
      <div className="text-left">
        <p className="font-semibold mb-1">Favorites</p>
        <ul className="space-y-1">
          <li>News Feed</li>
          <li>Messages</li>
          <li>Events</li>
          <li>Find Friends</li>
        </ul>
      </div>

      {/* 🗂 Lists */}
      <div className="text-left">
        <p className="font-semibold mb-1 mt-2">Lists</p>
        <ul className="space-y-1">
          <li>Close Friends</li>
          <li>Family</li>
          <li>Work</li>
        </ul>
      </div>
    </div>
  );
}
