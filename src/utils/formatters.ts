import { IEpisode } from "../screens/seriesDetailsScreen";
import { ISerie } from "../screens/seriesListScreen";

export const formatSeriesData = (rawSerieData: any) => {
  const serie: ISerie = {
    id: rawSerieData.id,
    name: rawSerieData.name,
    imageURL: rawSerieData.image ? rawSerieData.image.original : null,
    genres: rawSerieData.genres,
    summary: rawSerieData.summary,
    schedule: rawSerieData.schedule,
  };
  return serie;
};
export const formatEpisodeData = (rawEpisodeData: any) => {
  const serie: IEpisode = {
    id: rawEpisodeData.id,
    number: rawEpisodeData.number,
    name: rawEpisodeData.name,
    image: rawEpisodeData.image ? rawEpisodeData.image.medium : null,
    summary: rawEpisodeData.summary,
  };
  return serie;
};

export const removeHTMLTags = (text: string) => {
  return text.replace(/<[^>]*>?/gm, "");
};
