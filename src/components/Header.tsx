// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-2 px-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold">facebook</h1>
        <nav className="space-x-4 text-sm">
          <Link href="#">Home</Link>
          <Link href="#">Profile</Link>
          <Link href="#">Friends</Link>
          <Link href="#">Inbox (2)</Link>
        </nav>
      </div>
      <div className="space-x-4 text-sm">
        <Link href="#">Bonny Makaniankhondo</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Logout</Link>
      </div>
    </header>
  );
}
