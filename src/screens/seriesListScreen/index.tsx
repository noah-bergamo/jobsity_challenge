import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import useSeriesData from "../../hooks/useSeriesData";
import SeriesCard from "../../components/seriesCard";
import SearchInput from "../../components/searchInput";
import { formatSeriesData } from "../../utils/formatters";
import Loading from "../../components/loading";
import * as S from "./styles";
export interface ISerie {
  id: number;
  name: string;
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
    <S.Container>
      <SearchInput
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onSearchPress={searchByName}
      />
      <FlatList
        data={seriesList}
        numColumns={2}
        contentContainerStyle={{ alignItems: "center" }}
        onEndReached={() =>
          searchText.length > 0 ? () => {} : loadSeries(true)
        }
        renderItem={({ item }) => <SeriesCard serie={item} />}
      />
      <Loading loading={loading} />
    </S.Container>
  );
};

export default SeriesListScreen;
