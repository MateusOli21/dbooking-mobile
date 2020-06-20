import styled from "styled-components/native";

export const theme = {
  primary: "#ea4c4c",
  primaryLight: "#f25c5c",
  primaryDark: "#c14545",
  secondary: "#0e2431",
  secondaryLight: "#193647",
  secondaryLight: "#081b26",
  white: "#f9f9f9",
  gray: "#92929c",
  montserratLight: "Montserrat_300Light",
  montserratRegular: "Montserrat_400Regular",
  montserratBold: "Montserrat_700Bold",
};

export const Wrapper = styled.View`
  background: ${theme.primaryLight};
  flex: 1;
`;
