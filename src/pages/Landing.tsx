import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { TrendingSection } from '@/components/TrendingSection';
import { Footer } from '@/components/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
