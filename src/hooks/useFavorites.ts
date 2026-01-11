import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('cinevibe_favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const addFavorite = (movieId: number) => {
    const updated = [...favorites, movieId];
    setFavorites(updated);
    localStorage.setItem('cinevibe_favorites', JSON.stringify(updated));
  };

  const removeFavorite = (movieId: number) => {
    const updated = favorites.filter(id => id !== movieId);
    setFavorites(updated);
    localStorage.setItem('cinevibe_favorites', JSON.stringify(updated));
  };

  const isFavorite = (movieId: number) => favorites.includes(movieId);

  const toggleFavorite = (movieId: number) => {
    if (isFavorite(movieId)) {
      removeFavorite(movieId);
    } else {
      addFavorite(movieId);
    }
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite };
}
