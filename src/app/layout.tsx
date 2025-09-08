import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Deepak Chaudhari - Backend Developer Portfolio',
  description:
    'Experienced Backend Developer (3+ years) skilled in Node.js, FastAPI, Next.js, and SQL/NoSQL databases. Specialized in designing scalable APIs, automation systems, chatbot integrations, and modern web apps.',
  keywords:
    'Backend Developer, Node.js, FastAPI, Next.js, SQL, NoSQL, APIs, Automation, Chatbots, Web Apps',
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
