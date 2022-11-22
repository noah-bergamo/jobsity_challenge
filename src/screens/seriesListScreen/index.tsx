import { View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../utils/colors";

import useSeriesData from "../../hooks/useSeriesData";
import SeriesCard from "../../components/seriesCard";
import SearchInput from "../../components/searchInput";
import { formatSeriesData } from "../../utils/formatters";
import Loading from "../../components/loading";

export interface ISerie {
  id: number;
  url: string;
  name: string;
  language: string;
  genres: string[];
  imageURL: string;
  summary: string;
  schedule: { time: number; days: string[] };
}

const SeriesListScreen = () => {
  const seriesData = useSeriesData();

  const [seriesList, setSeriesList] = useState<ISerie[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (searchText.length == 0) loadSeries(false, true);
  }, [searchText]);

  const loadSeries = async (loadMore = false, clearPreviousList = false) => {
    setLoading(true);
    const pageIndex = loadMore ? seriesData.page + 1 : 1;
    const newData: any[] = await seriesData.loadSeriesData(pageIndex);
    console.log({ newData });
    const formatedData: ISerie[] = newData.map((item) =>
      formatSeriesData(item)
    );
    setSeriesList(
      clearPreviousList ? formatedData : [...seriesList, ...formatedData]
    );
    setLoading(false);
  };

  const searchByName = async () => {
    if (searchText.length == 0) return;
    setLoading(true);
    const newData: any[] = await seriesData.searchSeriesByName(searchText);

    const formatedData = newData.map((item) => formatSeriesData(item.show));
    setSeriesList(formatedData);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.BLACK }}>
      <SearchInput
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onSearchPress={searchByName}
      />
      <FlatList
        data={seriesList}
        numColumns={3}
        contentContainerStyle={{ alignItems: "center" }}
        onEndReached={() =>
          searchText.length > 0 ? () => {} : loadSeries(true)
        }
        renderItem={({ item }) => <SeriesCard serie={item} />}
      />
      <Loading loading={loading} />
    </View>
  );
};

export default SeriesListScreen;
