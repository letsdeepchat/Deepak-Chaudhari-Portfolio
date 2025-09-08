import Header from '@/components/portfolio/header';
import HomeSection from '@/components/portfolio/home-section';
import AboutSection from '@/components/portfolio/about-section';
import SkillsSection from '@/components/portfolio/skills-section';
import WorkSection from '@/components/portfolio/work-section';
import ArticlesSection from '@/components/portfolio/articles-section';
import ContactSection from '@/components/portfolio/contact-section';
import Footer from '@/components/portfolio/footer';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
