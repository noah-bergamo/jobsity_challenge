import styled from "styled-components/native";
import { Colors } from "../../utils/colors";
import Text from "../text";

export const Container = styled.TouchableOpacity({
  backgroundColor: Colors.DARK_GREY,
  borderRadius: 4,
  marginHorizontal: 10,
  marginVertical: 10,
  maxWidth: 150,
});
export const FavoriteContainer = styled.TouchableOpacity({
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
});

export const ImageContainer = styled.View({ flex: 2 });

export const Image = styled.Image({ width: 150, height: 200 });
export const TitleContainer = styled.View({
  flex: 1,
  minHeight: 55,
  justifyContent: "center",
  paddingHorizontal: 4,
  paddingVertical: 8,
});
export const StyledText = styled(Text)({
  textAlign: "center",
  fontWeight: "bold",
});
