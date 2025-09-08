"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { BrainCircuit, Code, FileCode2, Phone, Receipt, Server, MessageSquare, Database } from 'lucide-react';
import { PythonIcon, ReactIcon, NextJSIcon, FastAPIIcon, DockerIcon } from './icons';

const skills = [
  { 
    name: 'Python/Core Java/TypeScript', 
    level: 80, 
    icons: [PythonIcon, FileCode2] 
  },
  { 
    name: 'HTML5/CSS3/JavaScript', 
    level: 85, 
    icons: [Code] 
  },
  { 
    name: 'React/Next.js/Node.js/FastAPI', 
    level: 70, 
    icons: [ReactIcon, NextJSIcon, Server, FastAPIIcon] 
  },
  { 
    name: 'Docker/PostgreSQL/Langchain/ARI', 
    level: 75, 
    icons: [DockerIcon, Database, BrainCircuit, Phone] 
  },
  { 
    name: 'GST APIs/Telephony/Chatbots/AI', 
    level: 80, 
    icons: [Receipt, Phone, MessageSquare, BrainCircuit] 
  },
];

export default function SkillsSection() {
  const [animatedLevels, setAnimatedLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map(s => s.level));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Skills</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Professional Skills</h3>
            <p className="text-muted-foreground mb-8">
              Experienced in building scalable applications, telephony systems, chatbots, and automation solutions. Passionate about innovative technologies and continuous learning.
            </p>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icons.map((Icon, i) => <Icon key={i} className="w-5 h-5 text-primary" />)}
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary">{animatedLevels[index]}%</span>
                  </div>
                  <Progress value={animatedLevels[index]} className="h-2 [&>div]:bg-primary [&>div]:transition-all [&>div]:duration-1000" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/500/500"
              alt="Skills illustration"
              width={500}
              height={500}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint="tech abstract"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
