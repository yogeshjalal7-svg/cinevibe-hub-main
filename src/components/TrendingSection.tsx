import { useNavigate } from 'react-router-dom';
import { movies } from '@/data/movies';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export function TrendingSection() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/30">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Talk of the Town
            </h2>
            <p className="text-muted-foreground">Trending movies everyone's watching</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
        >
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              onClick={() => navigate('/auth')}
              className="flex-shrink-0 w-40 md:w-48 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-border group-hover:border-primary/50 transition-all duration-300">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/80 text-primary-foreground">
                    {movie.genre[0]}
                  </span>
                </div>
              </div>
              <h3 className="font-medium text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                {movie.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{movie.year}</span>
                <span className="text-xs text-yellow-500">⭐ {movie.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
