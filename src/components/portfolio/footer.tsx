import Link from 'next/link';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { WhatsappIcon } from './icons';

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/letsdeepchat/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/letsdeepchat', icon: Github },
    { name: 'Instagram', href: 'https://www.instagram.com/letsdeepchat/', icon: Instagram },
    { name: 'Twitter', href: 'https://www.twitter.com/letsdeepchat/', icon: Twitter },
    { name: 'WhatsApp', href: 'https://wa.me/917895840255', icon: WhatsappIcon },
];


export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-4">Deepak Chaudhari</h3>
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="hover:text-accent transition-colors">
              <Icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="text-sm text-primary-foreground/80">&#169; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
