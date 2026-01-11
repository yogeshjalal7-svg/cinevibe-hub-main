import { useState, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Header } from '@/components/Header';
import { MovieCard } from '@/components/MovieCard';
import { MovieModal } from '@/components/MovieModal';
import { Footer } from '@/components/Footer';
import { movies, genres, Movie } from '@/data/movies';
import { useFavorites } from '@/hooks/useFavorites';
import { cn } from '@/lib/utils';

const Home = () => {
  const { isAuthenticated } = useAuth();
  const { isFavorite, toggleFavorite, favorites } = useFavorites();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showFavorites, setShowFavorites] = useState(false);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  const filteredMovies = useMemo(() => {
    let result = movies;

    // Filter by favorites
    if (showFavorites) {
      result = result.filter(movie => favorites.includes(movie.id));
    }

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(query) ||
        movie.director.toLowerCase().includes(query) ||
        movie.genre.some(g => g.toLowerCase().includes(query))
      );
    }

    // Filter by genre
    if (selectedGenre !== 'All') {
      result = result.filter(movie => movie.genre.includes(selectedGenre));
    }

    return result;
  }, [searchQuery, selectedGenre, showFavorites, favorites]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        showSearch 
        onSearch={setSearchQuery}
        onShowFavorites={() => setShowFavorites(!showFavorites)}
        showingFavorites={showFavorites}
      />
      
      <main className="flex-1 container px-4 py-8">
        {/* Genre Filter */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => {
                setSelectedGenre(genre);
                setShowFavorites(false);
              }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                selectedGenre === genre && !showFavorites
                  ? "gradient-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Section Title */}
        <div className="mb-6">
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            {showFavorites ? 'My Favorites' : selectedGenre === 'All' ? 'All Movies' : selectedGenre + ' Movies'}
          </h1>
          <p className="text-muted-foreground mt-1">
            {filteredMovies.length} {filteredMovies.length === 1 ? 'movie' : 'movies'} found
          </p>
        </div>

        {/* Movie Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={isFavorite(movie.id)}
                onToggleFavorite={() => toggleFavorite(movie.id)}
                onClick={() => setSelectedMovie(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
              {showFavorites ? 'No favorites yet' : 'No movies found'}
            </h3>
            <p className="text-muted-foreground">
              {showFavorites 
                ? 'Start adding movies to your favorites!' 
                : 'Try adjusting your search or filter'}
            </p>
          </div>
        )}
      </main>

      <Footer />

      {/* Movie Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
          isFavorite={isFavorite(selectedMovie.id)}
          onToggleFavorite={() => toggleFavorite(selectedMovie.id)}
        />
      )}
    </div>
  );
};

export default Home;
