"use client";

import { useState } from 'react';
import Sidebar from '@/components/vcard/sidebar';
import Navbar from '@/components/vcard/navbar';
import AboutPage from '@/components/vcard/about-page';
import ResumePage from '@/components/vcard/resume-page';
import PortfolioPage from '@/components/vcard/portfolio-page';
import ContactPage from '@/components/vcard/contact-page';
import BlogPage from '@/components/vcard/blog-page';

const pages = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

export default function VCardPage() {
  const [activePage, setActivePage] = useState('About');

  const renderPage = () => {
    switch (activePage) {
      case 'About':
        return <AboutPage />;
      case 'Resume':
        return <ResumePage />;
      case 'Portfolio':
        return <PortfolioPage />;
      case 'Blog':
        return <BlogPage />;
      case 'Contact':
        return <ContactPage />;
      default:
        return <AboutPage />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:flex-row md:items-start md:gap-6 md:p-6 lg:gap-10 lg:p-12">
      <div className="w-full md:w-auto">
        <Sidebar />
      </div>
      <div className="mt-6 w-full flex-1 md:mt-0">
        <Navbar
          pages={pages}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <div className="mt-6">{renderPage()}</div>
      </div>
    </main>
  );
}
