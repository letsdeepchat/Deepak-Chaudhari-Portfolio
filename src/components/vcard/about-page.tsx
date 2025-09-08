import { Code, Server, Speaker, Star } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'Web development',
    description: 'High-quality development of sites at the professional level.',
  },
  {
    icon: <Server className="h-10 w-10 text-accent" />,
    title: 'Backend Development',
    description: 'Robust backend solutions for web and mobile applications.',
  },
   {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: 'AI Integration',
    description: 'Integrating AI models to create intelligent applications.',
  },
  {
    icon: <Speaker className="h-10 w-10 text-accent" />,
    title: 'Public Speaking',
    description: 'Sharing knowledge on tech, AI, and software development.',
  },
];

const clients = [
    { name: 'Nabard', logo: 'https://www.nabard.org/images/logo.png' },
    { name: 'Anheuser-Busch InBev', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/AB_InBev_logo.svg/1200px-AB_InBev_logo.svg.png' },
    { name: 'Adaequare', logo: 'https://media.licdn.com/dms/image/D4D0BAQG7Z9Y1X9X9Xg/company-logo_200_200/0/1688533838340/adaequare_info_pvt_ltd_logo?e=2147483647&v=beta&t=x_h7L0f4b3Y-jJ7n8rZ6tYk9X8w4B-g8G_a7H8rY9zU' },
    { name: 'Questt', logo: 'https://media.licdn.com/dms/image/C4D0BAQHi63T1tWk2hA/company-logo_200_200/0/1630651786576/questt_logo?e=2147483647&v=beta&t=W-3-E0t4a3E-X6x_wX8x8Qz9Z9i_x9c8X7zI8Z7j8Zk' },
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
         Hello! I'm Deepak Chaudhari, a B.Tech Computer Science graduate with over 2.5 years of experience as a Software Engineer. I specialize in building robust and scalable applications.
        </p>
        <p>
         My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
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
