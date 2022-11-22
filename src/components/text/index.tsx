import { View, Text as T, TextProps } from "react-native";
import React, { FC } from "react";
import { Colors } from "../../utils/colors";
type CustomTextProps = {
  size?: number;
  color?: string;
} & TextProps;

const Text: FC<CustomTextProps> = ({
  children,
  size = 16,
  color = Colors.WHITE,
  style,
  ...rest
}) => {
  return (
    <T
      style={[{ color, fontSize: size, textAlign: "justify" }, style]}
      {...rest}
    >
      {children}
    </T>
  );
};

export default Text;
