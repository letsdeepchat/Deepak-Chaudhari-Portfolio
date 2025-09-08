'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'G2H e-Commerce Services',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: 'http://gram2home.in/',
    aiHint: 'ecommerce website',
  },
  {
    title: 'iFPO Integration Software',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: 'http://ifpo.in/',
    aiHint: 'software dashboard',
  },
  {
    title: 'Tribal Development Fund',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: 'https://www.nabard.org/content1.aspx?id=579&catid=8&mid=8',
    aiHint: 'community project',
  },
  {
    title: 'NabFPO Service Provider',
    category: 'Applications',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    link: 'https://nabfpo.in/',
    aiHint: 'financial services',
  },
   {
    title: 'People Cycle for Tracking',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    link: 'https://anheuserbuschinbev.sharepoint.com/sites/PeopleCycleAnalytics',
    aiHint: 'analytics dashboard',
  },
  {
    title: 'Sales Academy for Learning',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    link: 'https://anheuserbuschinbev.sharepoint.com/sites/Sales-EUR',
    aiHint: 'elearning platform',
  },
];

const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

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

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.title}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
                <figure className="relative overflow-hidden rounded-lg">
                   <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                     <Eye className="h-8 w-8 text-white" />
                   </div>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="h-auto w-full transform transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={project.aiHint}
                  />
                </figure>
                <h3 className="mt-4 text-lg font-medium text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm capitalize text-muted-foreground">
                  {project.category}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
