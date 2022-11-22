import { TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Colors } from "../../utils/colors";
import Title from "../title";

interface SeasonButtonProps {
  index: number;
  isSelected: boolean;
  onSelectSeason: () => void;
}
const SeasonButton: FC<SeasonButtonProps> = ({
  index,
  isSelected,
  onSelectSeason,
}) => {
  return (
    <TouchableOpacity
      style={{
        padding: 4,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? Colors.PRIMARY : "transparent",
        borderRadius: isSelected ? 500 : 0,
      }}
      onPress={() => onSelectSeason()}
    >
      <Title text={(index + 1).toString()} color={Colors.WHITE} />
    </TouchableOpacity>
  );
};

export default SeasonButton;
