import React, { FC } from "react";
import { IEpisode } from "../../screens/seriesDetailsScreen";
import { Colors } from "../../utils/colors";
import Title from "../title";
import * as S from "./styles";
import { removeHTMLTags } from "../../utils/formatters";

interface IEpisodeCardProps {
  episode: IEpisode;
  index: number;
}
const EpisodeCard: FC<IEpisodeCardProps> = ({ episode }) => {
  return (
    <S.Container>
      <S.StyledImage source={{ uri: episode.image }} />
      <S.DescriptionContainer>
        <Title
          text={`${episode.number ? episode.number : "Bonus"}. ${episode.name}`}
          color={Colors.WHITE}
        />
        <S.Summary numberOfLines={4}>
          {removeHTMLTags(episode.summary)}
        </S.Summary>
      </S.DescriptionContainer>
    </S.Container>
  );
};

export default EpisodeCard;
