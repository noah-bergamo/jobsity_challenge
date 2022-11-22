import { ISerie } from "../screens/seriesListScreen";

export const formatSeriesData = (rawSerieData: any) => {
  const serie: ISerie = {
    id: rawSerieData.id,
    genres: rawSerieData.genres,
    imageURL: rawSerieData.image ? rawSerieData.image.medium : null,
    language: rawSerieData.language,
    name: rawSerieData.name,
    summary: rawSerieData.summary,
    url: rawSerieData.url,
    schedule: rawSerieData.schedule,
  };
  return serie;
};
