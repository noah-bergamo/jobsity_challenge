import styled from "styled-components/native";

export const Title = styled.Text((props: { color: string; size: number }) => ({
  fontSize: props.size,
  color: props.color,
  fontWeight: "bold",
}));
