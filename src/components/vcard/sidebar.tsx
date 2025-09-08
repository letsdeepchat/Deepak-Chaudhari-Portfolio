"use client";
import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  Mail,
  Smartphone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Book,
  Code,
} from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '../portfolio/icons';

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/letsdeepchat', icon: Linkedin },
    { name: 'GitHub', href: 'https://www.github.com/letsdeepchat', icon: Github },
    { name: 'Medium', href: 'https://www.letsdeepchat.medium.com', icon: Book },
    { name: 'LeetCode', href: 'https://leetcode.com/letsdeepchat/', icon: Code },
    { name: 'Instagram', href: 'https://www.instagram.com/letsdeepchat/', icon: Instagram },
    { name: 'Twitter', href: 'https://www.twitter.com/letsdeepchat/', icon: Twitter },
    { name: 'WhatsApp', href: 'https://wa.me/917895840255', icon: WhatsappIcon },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="sticky top-6 w-full max-w-sm rounded-2xl bg-card p-6 shadow-md md:max-w-xs lg:max-w-sm">
      <div className="relative flex flex-col items-center text-center">
        <figure className="mb-4 h-36 w-36 overflow-hidden rounded-lg">
          <Image
            src="https://media.licdn.com/dms/image/v2/D5603AQFBcO06CGDtjg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1679749512178?e=1759968000&v=beta&t=tFWE7XpW9Q2I3Qz7fR_XhlkRTew1Q2i9Zw4hVGnzlJ0"
            alt="Deepak Chaudhari"
            width={150}
            height={150}
            className="h-full w-full object-cover"
            data-ai-hint="man portrait"
          />
        </figure>

        <div className="info-content">
          <h1 className="text-2xl font-semibold text-foreground">
            DEEPAK CHAUDHARI
          </h1>
          <p className="mt-2 rounded-md bg-background px-3 py-1 text-sm font-light text-primary">
            Software Developer
          </p>
        </div>

        <button
          className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-accent shadow-sm transition-transform duration-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div
        className={`sidebar-info_more mt-6 overflow-hidden transition-all duration-500 md:max-h-full ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="my-4 h-px bg-border"></div>

        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-accent shadow-sm">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Email
              </p>
              <a
                href="mailto:deepakchaudhari705@gmail.com"
                className="text-sm text-foreground hover:text-accent"
              >
                deepakchaudhari705@gmail.com
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-accent shadow-sm">
              <Smartphone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Phone
              </p>
              <a
                href="tel:+917895840255"
                className="text-sm text-foreground hover:text-accent"
              >
                +91 7895840255
              </a>
            </div>
          </li>
          
          <li className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background text-accent shadow-sm">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase text-muted-foreground">
                Location
              </p>
              <address className="text-sm not-italic text-foreground">
                Bengaluru, Karnataka
              </address>
            </div>
          </li>
        </ul>

        <div className="my-4 h-px bg-border"></div>

        <ul className="flex justify-center gap-4">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
