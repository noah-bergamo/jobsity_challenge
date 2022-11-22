import React, { FC, useContext, useEffect, useState } from "react";
import { ISerie } from "../../screens/seriesListScreen";
import { Colors } from "../../utils/colors";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { SeriesStackParamList } from "../../navigation/homeStack";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as S from "./styles";
import { Text } from "react-native";
interface ISeriesCardProps {
  serie: ISerie;
}
const SeriesCard: FC<ISeriesCardProps> = ({ serie }) => {
  const [favorite, setFavorite] = useState<boolean>();

  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoriteContext);
  const navigation =
    useNavigation<BottomTabNavigationProp<SeriesStackParamList>>();

  useEffect(() => {
    checkFavorite();
  }, [favorites]);

  const checkFavorite = () => {
    if (favorites.includes(serie)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  const favoriteSerie = () => {
    setFavorite(!favorite);
    if (favorite) {
      removeFavorite(serie);
    } else {
      addFavorite(serie);
    }
  };

  return (
    <S.Container
      onPress={() => navigation.navigate("SerieDetails", { serieData: serie })}
    >
      <S.FavoriteContainer onPress={() => favoriteSerie()}>
        <MaterialIcons
          name={favorite ? "favorite" : "favorite-border"}
          size={20}
          color={favorite ? Colors.PRIMARY : Colors.WHITE}
        />
      </S.FavoriteContainer>
      <S.Image
        source={{ uri: serie.imageURL }}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <S.TitleContainer>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {serie.name}
        </Text>
      </S.TitleContainer>
    </S.Container>
  );
};

export default SeriesCard;
