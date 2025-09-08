"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#articles', label: 'Articles' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label:string; isMobile?: boolean}) => {
    const linkClasses = cn(
      "font-medium transition-colors",
      activeLink === href
        ? 'text-primary'
        : 'text-foreground/60 hover:text-primary',
      isMobile ? 'block text-lg py-2' : 'text-sm px-3 py-2 rounded-md'
    );
    
    if (isMobile) {
      return (
        <SheetClose asChild>
          <Link href={href} className={linkClasses}>{label}</Link>
        </SheetClose>
      )
    }

    return (
      <Link href={href} className={linkClasses}>{label}</Link>
    )
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
    )}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            Deepak Chaudhari
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => <NavLink key={link.href} {...link} />)}
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6">
                <div className="flex flex-col space-y-4">
                  <SheetClose asChild>
                    <Link href="#home" className="text-2xl font-bold text-primary">
                      Deepak Chaudhari
                    </Link>
                  </SheetClose>
                  <div className="flex flex-col space-y-2 pt-8">
                    {navLinks.map(link => <NavLink key={link.href} {...link} isMobile />)}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
