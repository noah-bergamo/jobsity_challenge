import { FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import SeriesCard from "../../components/seriesCard";
import * as S from "./styles";
import Text from "../../components/text";

const FavoritesListScreen = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <S.Container>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <SeriesCard serie={item} />}
          numColumns={3}
        />
      ) : (
        <S.PlaceholderContainer>
          <Text>There's no favorite series</Text>
        </S.PlaceholderContainer>
      )}
    </S.Container>
  );
};

export default FavoritesListScreen;
