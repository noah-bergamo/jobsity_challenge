import styled from "styled-components/native";
import { Colors } from "../../utils/colors";
import Text from "../text";

export const Container = styled.View({
  backgroundColor: Colors.DARK_GREY,
  flexDirection: "row",
  borderRadius: 8,
  marginBottom: 16,
  alignItems: "center",
  height: 150,
});

export const StyledImage = styled.Image({
  width: 80,
  height: 150,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
});

export const DescriptionContainer = styled.View({ padding: 10, flex: 1 });

export const Summary = styled(Text)({
  marginTop: 4,
});
