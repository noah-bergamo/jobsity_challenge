import { TextProps } from "react-native";
import React, { FC } from "react";
import { Colors } from "../../utils/colors";
import * as S from "./style";
type TitleProps = {
  text: string;
  size?: number;
  color?: string;
} & TextProps;
const Title: FC<TitleProps> = ({
  text,
  size = 20,
  color = Colors.PRIMARY,
  ...rest
}) => {
  return (
    <S.Title size={size} color={color} {...rest}>
      {text}
    </S.Title>
  );
};

export default Title;
