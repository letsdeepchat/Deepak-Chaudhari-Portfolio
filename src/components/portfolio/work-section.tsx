import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '../ui/button';

const projects = [
  {
    title: 'G2H e-Commerce Services',
    description: 'G2H is an e-commerce platform. We designed and developed a clean and modern page.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    link: 'http://gram2home.in/',
    aiHint: 'ecommerce website',
  },
  {
    title: 'iFPO Integration Software',
    description: "i-FPO is an integration software which is integrated over 2k+ FPO's across India's 29 States.",
    imageUrl: 'https://picsum.photos/600/400?random=2',
    link: 'http://ifpo.in/',
    aiHint: 'software dashboard',
  },
  {
    title: 'Tribal Development Fund',
    description: 'NABARD has been associated with tribal development and sustainable livelihoods through funds.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    link: 'https://www.nabard.org/content1.aspx?id=579&catid=8&mid=8',
    aiHint: 'community project',
  },
  {
    title: 'NabFPO Service Provider',
    description: 'NabFPO provide financial and/or technical support to the Producer Organisation Promoting Institution (POPI).',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    link: 'https://nabfpo.in/',
    aiHint: 'financial services',
  },
   {
    title: 'People Cycle for Tracking',
    description: 'SharePoint site for analytics, counting user visits, new users, and clicks within specified periods.',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    link: 'https://anheuserbuschinbev.sharepoint.com/sites/PeopleCycleAnalytics',
    aiHint: 'analytics dashboard',
  },
  {
    title: 'Sales Academy for Learning',
    description: 'Established diverse course categories and seamlessly implemented a bookmarks feature for learning.',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    link: 'https://anheuserbuschinbev.sharepoint.com/sites/Sales-EUR',
    aiHint: 'elearning platform',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 w-full">
                 <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.aiHint}
                  />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      More..
                    </Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
