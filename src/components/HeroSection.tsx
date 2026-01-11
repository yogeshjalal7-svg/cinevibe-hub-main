import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search, Compass, BookMarked, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/auth');
  };

  const features = [
    { icon: Compass, label: 'Discover', description: 'Explore curated movie collections' },
    { icon: BookMarked, label: 'Build', description: 'Create your personal watchlist' },
    { icon: MessageCircle, label: 'Engage', description: 'Read and share reviews' },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Discover Movies,
          <br />
          <span className="text-gradient">Build Your Collection</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Your personal movie discovery platform. Explore, review, and curate your ultimate watchlist.
        </p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-14 pl-12 pr-32 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-lg"
            />
            <Button 
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-6 rounded-full gradient-primary text-primary-foreground"
            >
              Explore
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </form>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {features.map((feature, i) => (
            <div 
              key={feature.label}
              className="flex flex-col items-center p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{feature.label}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
