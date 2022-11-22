import { createContext, FC, PropsWithChildren, useState } from "react";
import { ISerie } from "../screens/seriesListScreen";

export type FavoriteContextType = {
  favorites: ISerie[];
  addFavorite: (serie: ISerie) => void;
  removeFavorite: (serie: ISerie) => void;
};
export const FavoriteContext = createContext<FavoriteContextType>({
  favorites: [],
  addFavorite: (serie: ISerie) => {},
  removeFavorite: (serie: ISerie) => {},
});

export const FavoriteProvider: FC<PropsWithChildren> = ({ children }) => {
  const [favorites, setFavorites] = useState<ISerie[]>([]);

  const addFavorite = (serie: ISerie) => {
    const favList: ISerie[] = [...favorites];
    favList.push(serie);
    setFavorites(favList);
  };

  const removeFavorite = (serie: ISerie) => {
    const newList = favorites.filter(({ id }) => serie.id !== id);
    setFavorites(newList);
  };

  return (
    <FavoriteContext.Provider
      value={{ addFavorite, removeFavorite, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
