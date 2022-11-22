import styled from "styled-components/native";
import Title from "../../components/title";
import { Colors } from "../../utils/colors";

export const Container = styled.ScrollView({
  flex: 1,
  backgroundColor: Colors.BLACK,
});
export const ImageContainer = styled.View({
  flex: 1,
  backgroundColor: Colors.DARK_GREY,
  width: "100%",
  alignItems: "center",
});
export const Image = styled.Image({ width: "100%", height: 300 });

export const TitleAndSummaryContainer = styled.View({
  flex: 1,
  marginHorizontal: 16,
});
export const StyledTitle = styled(Title)({
  marginVertical: 12,
  textAlign: "center",
});
export const SectionContainer = styled.View({
  flex: 1,
  marginHorizontal: 16,
  marginTop: 16,
});
