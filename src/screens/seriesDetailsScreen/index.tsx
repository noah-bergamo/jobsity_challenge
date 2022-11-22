import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useSeriesData from "../../hooks/useSeriesData";
import { ISerie } from "../seriesListScreen";
import { Colors } from "../../utils/colors";

type ISeriesDetailRouteParams = {
  params?: { serieData: ISerie };
};
const SeriesDetailsScreen = () => {
  const seriesData = useSeriesData();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<ISeriesDetailRouteParams>>();
  const serieData = params?.serieData;
  const [seasonIDs, setSeasonIDs] = useState<number[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: serieData?.name });
    getSeasonData();
  }, []);
  const getSeasonData = async () => {
    if (!serieData) return;
    const data: any[] = await seriesData.loadSerieSeasonsInfo(serieData?.id);
    const ids = data.map((item) => item.id);
    setSeasonIDs(ids);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.DARK_GREY,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: serieData?.imageURL,
            }}
            style={{ width: 200, height: 300 }}
            resizeMode="contain"
            resizeMethod="resize"
          />
        </View>
        <View style={{ flex: 1, marginHorizontal: 16 }}>
          <View style={{ height: 24 }} />
          <Text style={styles.text}>{serieData?.name}</Text>
          <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
            {serieData?.summary.replace(/<[^>]*>?/gm, "")}
          </Text>
          <View style={{ height: 24 }} />
        </View>
      </View>

      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          Schedule
        </Text>

        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          {serieData?.schedule.days.map(
            (item, i) =>
              `${item}${i < serieData.schedule.days.length - 1 ? ", " : ""}`
          )}{" "}
          at {serieData?.schedule.time}
        </Text>
      </View>

      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          Genres
        </Text>

        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          {serieData?.genres.map(
            (item, i) =>
              `${item}${i < serieData.genres.length - 1 ? ", " : ""} `
          )}
        </Text>
      </View>

      <View style={{ flex: 1, marginHorizontal: 16 }}>
        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          Seasons
        </Text>

        <Text style={{ color: "white", fontSize: 14, textAlign: "justify" }}>
          {seasonIDs.map((item, i) => `${i}\n`)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SeriesDetailsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PRIMARY,
    marginBottom: 8,
    textAlign: "center",
  },
});
