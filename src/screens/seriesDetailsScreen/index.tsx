import { FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import useSeriesData from "../../hooks/useSeriesData";
import { ISerie } from "../seriesListScreen";
import Title from "../../components/title";
import { formatEpisodeData } from "../../utils/formatters";
import EpisodeCard from "../../components/episodeCard";
import SeasonButton from "../../components/seasonButton";
import Text from "../../components/text";
import Loading from "../../components/loading";
import * as S from "./styles";

type SeriesDetailRouteParams = {
  params?: { serieData: ISerie };
};
export interface IEpisode {
  id: number;
  name: string;
  image: string;
  summary: string;
  number: number;
}

const SeriesDetailsScreen = () => {
  const seriesData = useSeriesData();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<SeriesDetailRouteParams>>();
  const serieData = params?.serieData;
  const [seasonIDs, setSeasonIDs] = useState<number[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [seasonEpisodes, setSeasonEpisodes] = useState<IEpisode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    navigation.setOptions({ title: serieData?.name });
    getSeasonData();
  }, []);

  useEffect(() => {
    getEpisodesData();
  }, [seasonIDs, selectedSeason]);

  const getSeasonData = async () => {
    setLoading(true);
    if (!serieData) return;
    const data: any[] = await seriesData.loadSerieSeasonsInfo(serieData?.id);
    const ids = data.map((item) => item.id);
    setSeasonIDs(ids);
    setLoading(false);
  };
  const getEpisodesData = async () => {
    setLoading(true);
    if (!serieData || seasonIDs.length === 0) return;
    const data: any[] = await seriesData.loadSerieEpisodesInfo(
      seasonIDs[selectedSeason - 1]
    );
    const formattedEpisodeData = data.map((item) => formatEpisodeData(item));
    setSeasonEpisodes(formattedEpisodeData);
    setLoading(false);
  };

  const renderImage = () => {
    return (
      <S.ImageContainer>
        <S.Image
          source={{
            uri: serieData?.imageURL,
          }}
          resizeMode="cover"
        />
      </S.ImageContainer>
    );
  };

  const renderTitleAndSummary = () => {
    return (
      <S.TitleAndSummaryContainer>
        <S.StyledTitle text={serieData?.name || ""} size={22} />
        <Text>{serieData?.summary.replace(/<[^>]*>?/gm, "")}</Text>
      </S.TitleAndSummaryContainer>
    );
  };

  const renderSchedule = () => {
    return (
      <S.SectionContainer>
        <Title text="Schedule" />
        <Text>
          {serieData?.schedule.days.map(
            (item, i) =>
              `${item}${i < serieData.schedule.days.length - 1 ? ", " : ""}`
          )}{" "}
          at {serieData?.schedule.time}
        </Text>
      </S.SectionContainer>
    );
  };

  const renderSeasons = () => {
    return (
      <S.SectionContainer>
        <Title text="Seasons" />

        <FlatList
          data={seasonIDs}
          horizontal
          style={{ marginVertical: 12 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            const isSelected = index === selectedSeason - 1;
            return (
              <SeasonButton
                index={index}
                isSelected={isSelected}
                onSelectSeason={() => setSelectedSeason(index + 1)}
              />
            );
          }}
        />

        <FlatList
          data={seasonEpisodes}
          style={{ marginBottom: 20 }}
          contentContainerStyle={{
            justifyContent: "space-around",
            flex: 1,
          }}
          renderItem={({ item, index }) => (
            <EpisodeCard episode={item} index={index} />
          )}
        />
      </S.SectionContainer>
    );
  };

  const renderGenres = () => {
    return (
      <S.SectionContainer>
        <Title text="Genres" />

        <Text>
          {serieData?.genres.map(
            (item, i) =>
              `${item}${i < serieData.genres.length - 1 ? ", " : ""} `
          )}
        </Text>
      </S.SectionContainer>
    );
  };

  return (
    <S.Container
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
    >
      {renderImage()}
      {renderTitleAndSummary()}
      {renderSchedule()}
      {renderGenres()}
      {renderSeasons()}
      <Loading loading={loading} />
    </S.Container>
  );
};

export default SeriesDetailsScreen;
