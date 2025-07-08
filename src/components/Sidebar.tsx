// src/components/Sidebar.tsx
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow text-sm space-y-4">
      <div className="text-center">
        <Image
          src="/assets/profile-pic.webp"
          alt="Profile"
          width={150}
          height={150}
          className="mx-auto rounded"
        />
        <p className="mt-2 font-semibold">Bonny Makaniankhondo</p>
      </div>
      <ul className="space-y-2">
        <li><a href="#">View Photos of Bonny (541)</a></li>
        <li><a href="#">View Videos of Bonny (14)</a></li>
        <li><a href="#">Send Bonny a Message</a></li>
        <li><a href="#">Poke Bonny</a></li>
        <li><a href="#">Subscribe via SMS</a></li>
      </ul>
      <div>
        <h3 className="font-semibold mt-4">Information</h3>
        <p>Networks: Facebook</p>
        <p>Birthday: April 8, 1987</p>
        <p>Current City: Mishawaka, IN</p>
      </div>
    </div>
  );
}
