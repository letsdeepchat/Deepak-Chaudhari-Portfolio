import { Code, Server, Bot } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Backend Development',
    description: 'Specialized in designing scalable APIs and modern web apps.',
  },
  {
    icon: <Server className="h-10 w-10 text-accent" />,
    title: 'Automation Systems',
    description: 'Building robust automation systems to improve efficiency.',
  },
   {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'Chatbot Integration',
    description: 'Integrating AI-powered chatbots for seamless user experiences.',
  },
];

const clients = [
    { name: 'FPO', logo: 'https://www.nabard.org/images/logo.png' },
    { name: 'NPCI', logo: 'https://play-lh.googleusercontent.com/A-dier3sEwf8V-5Xj1UuEV1GxPbJgIRl_JOqFA-SiAZhHyCMKlwaOIH3AsQSy0v4ZA=w480-h960-rw' },
    { name: 'American Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg' },
    { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Wells_Fargo_Bank_logo.svg/2560px-Wells_Fargo_Bank_logo.svg.png' },
];

export default function AboutPage() {
  return (
    <article className="rounded-2xl bg-card p-6 shadow-md md:p-8">
      <header>
        <h2 className="text-2xl font-semibold text-foreground">About me</h2>
        <div className="my-4 h-1 w-10 rounded-full bg-accent"></div>
      </header>

      <section className="text-muted-foreground space-y-4">
        <p>
         Experienced Backend Developer (3+ years) skilled in Node.js, FastAPI, Next.js, and SQL/NoSQL databases. Specialized in designing scalable APIs, automation systems, chatbot integrations, and modern web apps. Proven record in secure, learning, and e-commerce solutions.
        </p>
      </section>

      <section className="my-8">
        <h3 className="mb-6 text-xl font-medium text-foreground">
          What I'm doing
        </h3>
        <ul className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.title} className="flex items-start gap-4 rounded-xl border p-4">
              <div className="rounded-lg bg-background p-3 shadow-sm">
                {service.icon}
              </div>
              <div>
                <h4 className="text-md font-semibold text-foreground">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      
      <section>
        <h3 className="mb-6 text-xl font-medium text-foreground">Clients</h3>
        <div className="overflow-x-auto">
            <ul className="flex flex-nowrap items-center gap-8">
                {clients.map(client => (
                    <li key={client.name} className="flex-shrink-0">
                         <Image src={client.logo} alt={client.name} width={100} height={40} className="h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"/>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    </article>
  );
}
