import { useState, useEffect } from 'react';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const item = window.localStorage.getItem('livestock_app_favorites');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error('Error reading localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('livestock_app_favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error setting localStorage', error);
    }
  }, [favorites]);

  const addFavorite = (id: string) => {
    setFavorites(prev => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(favId => favId !== id));
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
