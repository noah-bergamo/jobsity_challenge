import styled from "styled-components/native";
import { Colors } from "../../utils/colors";
import Text from "../text";

export const Container = styled.View({
  flex: 1,
  backgroundColor: Colors.DARK_GREY,
  flexDirection: "row",
  borderRadius: 8,
  marginBottom: 16,
});

export const StyledImage = styled.Image({
  width: 60,
  height: 110,
  borderTopLeftRadius: 8,
  borderBottomLeftRadius: 8,
});

export const DescriptionContainer = styled.View({ padding: 10, flex: 1 });

export const Summary = styled(Text)({
  marginTop: 4,
});
