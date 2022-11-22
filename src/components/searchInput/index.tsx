import { TouchableOpacity, Keyboard } from "react-native";
import React, { FC } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import * as S from "./styles";

interface ISearchInputProps {
  onChangeText: (text: string) => void;
  value: string;
  onSearchPress: () => void;
}
const SearchInput: FC<ISearchInputProps> = ({
  onChangeText,
  value,
  onSearchPress,
}) => {
  return (
    <S.Container>
      <S.Input
        placeholder="Search by the name of the show"
        onChangeText={(text: string) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={{ flex: 0.1 }}
        onPress={() => {
          Keyboard.dismiss();
          onSearchPress();
        }}
      >
        <MaterialIcons name="search" size={30} />
      </TouchableOpacity>
    </S.Container>
  );
};

export default SearchInput;
