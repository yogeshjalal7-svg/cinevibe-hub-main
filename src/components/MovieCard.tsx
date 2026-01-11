import { Movie } from '@/data/movies';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onClick: () => void;
}

export function MovieCard({ movie, isFavorite, onToggleFavorite, onClick }: MovieCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-glow cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img 
          src={movie.image} 
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="font-heading font-semibold text-foreground text-sm line-clamp-2 mb-2">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 flex-wrap">
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
              {g}
            </span>
          ))}
          <span className="text-xs text-muted-foreground ml-auto">
            ⭐ {movie.rating}
          </span>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className={cn(
          "absolute top-3 right-3 p-2 rounded-full transition-all duration-300",
          "bg-background/80 backdrop-blur-sm hover:bg-background",
          isFavorite ? "text-red-500" : "text-muted-foreground hover:text-red-500"
        )}
      >
        <Heart className={cn("h-4 w-4", isFavorite && "fill-current")} />
      </button>

      <div className="p-3 md:hidden">
        <h3 className="font-heading font-semibold text-foreground text-sm line-clamp-1">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
            {movie.genre[0]}
          </span>
          <span className="text-xs text-muted-foreground">
            ⭐ {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
