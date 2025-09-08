import { Book, Code } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { JavaIcon, PythonIcon, ReactIcon, NextJSIcon, FastAPIIcon, DockerIcon } from '@/components/portfolio/icons';

const education = [
    {
        institution: 'Graphic Era Hill University',
        period: '2017 — 2021',
        description: 'B.Tech in Computer Science and Engineering.'
    },
    {
        institution: 'CBSE Board',
        period: '2015-2016',
        description: 'Completed my 12th grade with a focus on Physics, Chemistry, and Mathematics.'
    },
];

const experience = [
    {
        title: 'Software Engineer',
        company: 'Questt AI',
        period: '2022 — Present',
        description: 'Implemented NPCL dashboard auth, configs, APIs; tested Adaequare/Postman; connected DBs; built OpenAI chatbots.'
    },
    {
        title: 'Associate Software Engineer',
        company: 'Adaequare',
        period: '2021 — 2022',
        description: 'Developed and maintained web applications using React, Node.js and other technologies. Contributed to SharePoint based projects.'
    }
]

const skills = [
  { name: 'JavaScript', value: 90, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'Python', value: 85, icon: <PythonIcon className="h-6 w-6 text-accent"/> },
  { name: 'Java', value: 75, icon: <JavaIcon className="h-6 w-6 text-accent"/> },
  { name: 'React', value: 90, icon: <ReactIcon className="h-6 w-6 text-accent"/> },
  { name: 'Next.js', value: 85, icon: <NextJSIcon className="h-6 w-6 text-accent"/> },
  { name: 'FastAPI', value: 80, icon: <FastAPIIcon className="h-6 w-6 text-accent"/> },
  { name: 'Docker', value: 70, icon: <DockerIcon className="h-6 w-6 text-accent"/> },
  { name: 'AI/ML', value: 75, icon: <Code className="h-6 w-6 text-accent"/> },
];

export default function ResumePage() {
  return (
    <article className="rounded-2xl bg-card p-6 shadow-md md:p-8">
      <header>
        <h2 className="text-2xl font-semibold text-foreground">Resume</h2>
        <div className="my-4 h-1 w-10 rounded-full bg-accent"></div>
      </header>

      <div className="grid gap-12 md:grid-cols-2">
        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-background p-3 shadow-sm">
              <Book className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Education</h3>
          </div>
          <ol className="relative border-l border-border/50 pl-6">
            {education.map((item) => (
              <li key={item.institution} className="mb-8 ml-2">
                <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background"></span>
                <h4 className="text-md font-semibold text-foreground">{item.institution}</h4>
                <span className="text-sm text-muted-foreground">{item.period}</span>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-4">
            <div className="rounded-lg bg-background p-3 shadow-sm">
              <Book className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-medium text-foreground">Experience</h3>
          </div>
          <ol className="relative border-l border-border/50 pl-6">
            {experience.map((item) => (
              <li key={item.title} className="mb-8 ml-2">
                 <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background"></span>
                <h4 className="text-md font-semibold text-foreground">{item.title}</h4>
                <span className="text-sm text-muted-foreground">{item.company} | {item.period}</span>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="mt-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">My skills</h3>
        <ul className="grid gap-6 sm:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill.name}>
                <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {skill.icon}
                        <h5 className="font-medium text-foreground">{skill.name}</h5>
                    </div>
                    <data value={skill.value}>{skill.value}%</data>
                </div>
              <Progress value={skill.value} className="h-2 [&>div]:bg-accent" />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
