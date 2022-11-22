import styled from "styled-components/native";
import { Colors } from "../../utils/colors";

export const Container = styled.View({
  borderBottomWidth: 1,
  borderBottomColor: Colors.PRIMARY,
  backgroundColor: Colors.DARK_GREY,
  flexDirection: "row",
  paddingHorizontal: 20,
  justifyContent: "space-between",
  alignItems: "center",
});
export const Input = styled.TextInput({
  flex: 0.9,
  fontSize: 16,
  fontWeight: "bold",
});
