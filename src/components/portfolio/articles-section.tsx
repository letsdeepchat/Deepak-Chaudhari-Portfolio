import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ArticlesSection() {
  return (
    <section id="articles" className="py-20 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Articles</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Advanced Level Interview Key Points for MERN Full Stack Developers</h3>
            <p className="text-muted-foreground mb-6">
              In the field of web development, MERN (MongoDB, Express.js, React.js, Node.js) has gained significant popularity for building robust and scalable applications... This article presents advanced-level interview key points for MERN Full Stack Developers, covering topics such as HTML5, CSS media queries, JavaScript quirks and versatility, React.js interview questions, Node.js interview questions, Mongoose for connecting MongoDB, and creating RESTful APIs using Express.js.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="https://letsdeepchat.medium.com/full-stack-mern-developer-interviews-questions-in-advanced-level-957ab9bc0860" target="_blank" rel="noopener noreferrer">
                Read More
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://picsum.photos/600/400"
              alt="Article illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
              data-ai-hint="writing code"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
