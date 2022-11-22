import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import SeriesCard from "../../components/seriesCard";

const FavoritesListScreen = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
        paddingTop: 80,
        paddingLeft: 16,
      }}
    >
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <SeriesCard serie={item} />}
          numColumns={3}
        />
      ) : (
        <Text style={{ color: "white", fontSize: 16, marginTop: 40 }}>
          There's no favorite series
        </Text>
      )}
    </View>
  );
};

export default FavoritesListScreen;
