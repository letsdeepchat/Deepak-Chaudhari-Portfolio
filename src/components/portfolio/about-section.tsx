import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About Me</h2>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://picsum.photos/600/750"
                  alt="Deepak Chaudhari at work"
                  width={600}
                  height={750}
                  className="object-cover"
                  data-ai-hint="developer coding"
                />
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-2xl font-bold text-foreground">Deepak Chaudhari</h3>
            <p className="text-primary font-semibold mb-4">[ Developer @Questt AI ]</p>
            <p className="text-muted-foreground mb-6">
              Hello! I'm Deepak Chaudhari, a B.Tech Computer Science graduate with over 2.5 years of experience as a Software Engineer.
            </p>
            
            <h4 className="text-xl font-bold text-foreground mb-4">Why Me?</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-foreground">Resilient Learner</h5>
                <p className="text-muted-foreground">
                  Self-taught in Next.js, ARI/AMI/AGI, Langchain tools, advanced Docker/Pytest, SIP/IVR, Asterisk, and Git for SDE2 skills.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground">Versatile Experience</h5>
                <p className="text-muted-foreground">
                  Implemented NPCL dashboard auth, configs, APIs; tested Adaequare/Postman; connected DBs; built OpenAI chatbots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
