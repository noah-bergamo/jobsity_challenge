import { View, ActivityIndicator } from "react-native";
import React, { FC } from "react";
import { Colors } from "../../utils/colors";
import * as S from "./styles";

interface ILoadingProps {
  loading: boolean;
}
const Loading: FC<ILoadingProps> = ({ loading }) => {
  return loading ? (
    <S.Container>
      <ActivityIndicator color={Colors.PRIMARY} size="large" />
    </S.Container>
  ) : (
    <View />
  );
};

export default Loading;
