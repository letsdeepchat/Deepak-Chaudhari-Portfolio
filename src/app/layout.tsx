import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Deepak Chaudhari - Software Engineer Portfolio',
  description:
    'Deepak Chaudhari - Software Engineer at Questt AI. Expert in JavaScript, Python, React, Next.js, FastAPI, Docker, and AI technologies.',
  keywords:
    'Software Engineer, JavaScript, Python, React, Next.js, FastAPI, Docker, AI, Langchain, Questt AI',
  authors: [{ name: 'Deepak Chaudhari' }],
};

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${ptSans.className} bg-background text-foreground antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
