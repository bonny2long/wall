'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-2 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-xl">
            faceWall
          </Link>
          <nav className="hidden sm:flex space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/">Profile</Link>
            <Link href="/">Friends</Link>
            <Link href="/" className="relative">
  Inbox
  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] font-bold px-1.5 py-[1px] rounded-full">
    11
  </span>
</Link>

          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="text-black px-2 py-1 rounded text-sm"
          />
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/profile-pic.webp" 
              alt="Bonny"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-semibold">Bonny</span>
          </div>
          <Link href="/" className="text-sm hover:underline">
            Settings
          </Link>
          <Link href="/" className="text-sm hover:underline">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
}
