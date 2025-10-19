
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'NPCL Dashboard & Analytics',
    category: 'Web Development',
    imageUrl: 'https://github.com/user-attachments/assets/912fe048-2682-495e-9d80-3c245f3f1471',
    link: '#',
    aiHint: 'analytics dashboard',
    description: 'A comprehensive Power Management Dashboard with role-based access, real-time monitoring, and detailed analytics, built with Next.js, TypeScript, and PostgreSQL for NPCL.'
  },
  {
    title: 'Asterisk ARI Voice Assistant',
    category: 'AI Integration',
    imageUrl: 'https://github.com/user-attachments/assets/2d908a84-7573-497f-8d2c-e66155ccc8fb',
    link: '#',
    aiHint: 'voice assistant futuristic',
    description: 'Enterprise voice assistant using OpenAI GPT-4 and Asterisk ARI for NPCL customer service, featuring advanced real-time telephony integration for seamless user interaction.'
  },
  {
    title: 'Sales Academy for Learning',
    category: 'Web Development',
    imageUrl: 'https://letsdeepchat.github.io/portfolio/assets/img/SalesAcademyProject.jpg',
    link: '#',
    aiHint: 'e-learning platform',
    description: 'Developed Node.js backend, interactive learning modules, bookmarks, quizzes, videos and leaderboard features enhancing student learning engagement.'
  },
  {
    title: 'Gram2Home e-Commerce',
    category: 'Web Development',
    imageUrl: 'https://letsdeepchat.github.io/portfolio/assets/img/g2m.jpg',
    link: '#',
    aiHint: 'e-commerce shopping',
    description: 'Built authentication, add-to-cart, payment gateway integration and seamless product flow to deliver scalable, user-friendly e-commerce experience.'
  },
];

const categories = ['All', 'Web Development', 'AI Integration'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <article className="rounded-2xl bg-card p-6 shadow-md md:p-8">
      <header>
        <h2 className="text-2xl font-semibold text-foreground">Portfolio</h2>
        <div className="my-4 h-1 w-10 rounded-full bg-accent"></div>
      </header>

      <section>
        <ul className="mb-8 flex flex-wrap gap-x-4 gap-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setFilter(category)}
                className={`text-sm font-medium capitalize transition-colors duration-300 ${
                  filter === category
                    ? 'text-accent'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <li key={project.title}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                <figure className="relative h-48 w-full overflow-hidden rounded-lg">
                   <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     <Eye className="h-8 w-8 text-white" />
                   </div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                </figure>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm capitalize text-muted-foreground">
                  {project.category}
                </p>
                 <p className="mt-2 text-sm text-muted-foreground">
                  {project.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
