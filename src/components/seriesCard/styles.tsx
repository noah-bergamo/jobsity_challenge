import styled from "styled-components/native";
import { Colors } from "../../utils/colors";

export const Container = styled.TouchableOpacity({
  backgroundColor: Colors.DARK_GREY,
  borderRadius: 4,
  paddingBottom: 8,
  paddingHorizontal: 4,
  marginHorizontal: 10,
  marginVertical: 10,
  maxWidth: 100,
  justifyContent: "center",
  alignItems: "center",
});
export const FavoriteContainer = styled.TouchableOpacity({
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

export const Image = styled.Image({ width: 100, height: 150 });
export const TitleContainer = styled.View({
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 4,
});
export const Text = styled.Text({
  textAlign: "center",
  fontWeight: "bold",
});
