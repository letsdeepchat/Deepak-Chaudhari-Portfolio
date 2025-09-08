import { Book, Code, GraduationCap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { JavaIcon, PythonIcon, ReactIcon, NextJSIcon, FastAPIIcon, DockerIcon } from '@/components/portfolio/icons';

const education = [
    {
        institution: 'Dr. A.P.J. Abdul Kalam Technical University',
        period: '2014 — 2018',
        description: 'B.Tech in Computer Science & Engineering, Aggregate: 67%'
    },
];

const experience = [
    {
        title: 'Software Developer',
        company: 'Questt AI',
        period: 'Jun 2025 — Present',
        description: 'Developed GST automation system using FastAPI and PostgreSQL with secure APIs. Built NPCL dashboard authentication, configurations, APIs and integrated external systems. Worked on Postman testing, DB connectivity, and OpenAI chatbot development.'
    },
    {
        title: 'Technical Developer',
        company: 'AB InBev',
        period: 'Sep 2023 — Feb 2024',
        description: 'Developed scalable Node.js APIs improving app performance by 25%. Implemented secure authentication/authorization reducing security risks by 40%. Used async programming to enhance performance and non-blocking operations.'
    },
    {
        title: 'Web Developer',
        company: 'Karabi Software',
        period: 'Jun 2022 — Apr 2023',
        description: 'Led MongoDB database development improving data processing speed by 50%. Integrated third-party APIs to deliver seamless customer experiences. Built secure JWT-based backend and deployed on Linux Apache server.'
    },
    {
        title: 'Process Analyst',
        company: 'Visionet Systems',
        period: 'Sep 2020 — May 2022',
        description: 'Improved backend scalability and achieved 99.9% uptime with load balancing. Developed five strategic backend features using ES6 and asynchronous programming. Optimized server-side code for performance and reliability.'
    }
]

const skills = [
  { name: 'Node.js', value: 90, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'React.js', value: 85, icon: <ReactIcon className="h-6 w-6 text-accent"/> },
  { name: 'Express.js', value: 88, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'FastAPI', value: 80, icon: <FastAPIIcon className="h-6 w-6 text-accent"/> },
  { name: 'Next.js', value: 85, icon: <NextJSIcon className="h-6 w-6 text-accent"/> },
  { name: 'JavaScript', value: 90, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'TypeScript', value: 85, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'Python', value: 85, icon: <PythonIcon className="h-6 w-6 text-accent"/> },
  { name: 'PostgreSQL', value: 80, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'MongoDB', value: 78, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'MySQL', value: 75, icon: <Code className="h-6 w-6 text-accent"/> },
  { name: 'Docker', value: 70, icon: <DockerIcon className="h-6 w-6 text-accent"/> },
];

const certifications = [
    "AWS Certified Cloud Practitioner(CLF-C01)",
    "Selenium Essential Training",
    "Udemy Certified The Complete (FullStack) Web Developer: Zero To Mastery",
    "React + Redux",
    "Ducat Certified Data Science using Python"
]

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
              <GraduationCap className="h-6 w-6 text-accent" />
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

       <section className="mt-12">
        <h3 className="mb-6 text-xl font-medium text-foreground">Certifications</h3>
        <ul className="grid gap-2 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert} className="text-muted-foreground">{cert}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}
