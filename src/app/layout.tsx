// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wall | Mock Facebook',
  description: 'A throwback to Facebook 2009 layout using React, Next.js, Tailwind, and shadcn.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-gray-100 text-gray-900')}>
        {children}
      </body>
    </html>
  );
}
