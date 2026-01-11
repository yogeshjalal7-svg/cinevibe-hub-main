import { Movie } from '@/data/movies';
import { X, Heart, Calendar, Star, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface MovieModalProps {
  movie: Movie;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function MovieModal({ movie, isOpen, onClose, isFavorite, onToggleFavorite }: MovieModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 flex-shrink-0">
            <img 
              src={movie.image} 
              alt={movie.title}
              className="w-full h-64 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            />
          </div>

          <div className="flex-1 p-6">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              {movie.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genre.map((g) => (
                <span key={g} className="text-sm px-3 py-1 rounded-full gradient-primary text-primary-foreground">
                  {g}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{movie.year}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>{movie.rating}/10</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{movie.director}</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {movie.description}
            </p>

            <Button
              onClick={onToggleFavorite}
              className={cn(
                "w-full",
                isFavorite 
                  ? "bg-red-500/20 text-red-500 hover:bg-red-500/30 border border-red-500/50" 
                  : "gradient-primary text-primary-foreground"
              )}
            >
              <Heart className={cn("h-4 w-4 mr-2", isFavorite && "fill-current")} />
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
