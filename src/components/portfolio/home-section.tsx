import Image from 'next/image';
import Link from 'next/link';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsappIcon } from './icons';

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/letsdeepchat/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/letsdeepchat', icon: Github },
    { name: 'Instagram', href: 'https://www.instagram.com/letsdeepchat/', icon: Instagram },
    { name: 'Twitter', href: 'https://www.twitter.com/letsdeepchat/', icon: Twitter },
    { name: 'WhatsApp', href: 'https://wa.me/917895840255', icon: WhatsappIcon },
];

export default function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi there,
              <br />
              I am <span className="text-primary">Deepak Chaudhari</span>
              <br />
              [ Software Developer ]
            </h1>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          
          <div className="relative flex justify-center items-center">
             <div className="absolute flex flex-col space-y-4 left-0 -translate-x-12 hidden lg:flex">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                    <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-foreground/60 hover:text-primary transition-colors">
                        <Icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>

            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px]">
              <svg className="w-full h-full" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" fill="currentColor"/>
                </mask>
                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" fill="var(--primary)" className="text-primary/20"/>
                  <foreignObject x="0" y="0" width="100%" height="100%">
                    <Image
                      src="https://picsum.photos/480/480"
                      alt="Deepak Chaudhari"
                      width={480}
                      height={480}
                      className="object-cover w-full h-full"
                      data-ai-hint="portrait man"
                      style={{ clipPath: 'url(#mask0)' }}
                    />
                  </foreignObject>
                </g>
              </svg>
            </div>
            
             <div className="absolute flex space-x-4 bottom-0 translate-y-12 lg:hidden">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                    <Link key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-foreground/60 hover:text-primary transition-colors">
                        <Icon className="h-6 w-6" />
                    </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
