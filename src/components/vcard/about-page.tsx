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
    { name: 'Questt AI', logo: 'https://media.licdn.com/dms/image/C4D0BAQHi63T1tWk2hA/company-logo_200_200/0/1630651786576/questt_logo?e=2147483647&v=beta&t=W-3-E0t4a3E-X6x_wX8x8Qz9Z9i_x9c8X7zI8Z7j8Zk' },
    { name: 'AB InBev', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/AB_InBev_logo.svg/1200px-AB_InBev_logo.svg.png' },
    { name: 'Karabi Software', logo: 'https://media.licdn.com/dms/image/D4D0BAQG7Z9Y1X9X9Xg/company-logo_200_200/0/1688533838340/adaequare_info_pvt_ltd_logo?e=2147483647&v=beta&t=x_h7L0f4b3Y-jJ7n8rZ6tYk9X8w4B-g8G_a7H8rY9zU' },
    { name: 'Visionet Systems', logo: 'https://media.licdn.com/dms/image/C560BAQHY-gO5X4D4_w/company-logo_200_200/0/1630623326115/visionet_systems_inc_logo?e=2147483647&v=beta&t=B-xG0tL-L5L6_R_H_gP_yR-Z4Z3Y-4H2K1L3Y_x_8_Q' },
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
            <ul className="flex flex-nowrap gap-8">
                {clients.map(client => (
                    <li key={client.name} className="flex-shrink-0">
                         <Image src={client.logo} alt={client.name} width={100} height={40} className="object-contain grayscale hover:grayscale-0 transition-all duration-300 contrast-0 hover:contrast-100"/>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    </article>
  );
}
