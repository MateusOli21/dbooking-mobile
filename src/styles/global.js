import styled from "styled-components/native";

export const theme = {
  primary: "#ea4c4c",
  primaryLight: "#f25c5c",
  primaryDark: "#c14545",
  secondary: "#0e2431",
  secondaryLight: "#193647",
  secondaryDark: "#081b26",
  white: "#f9f9f9",
  gray: "#92929c",
};

export const fonts = {
  montserratLight: "Montserrat_300Light",
  montserratRegular: "Montserrat_400Regular",
  montserratBold: "Montserrat_700Bold",
};

export const fontSizes = {
  p12: "12px",
  p16: "16px",
  h6: "20px",
  h5: "25px",
  h4: "31px",
};

export const Wrapper = styled.SafeAreaView`
  background: ${theme.primaryLight};
  flex: 1;
`;

export const LogoRegular = styled.Text`
  color: ${theme.secondary};
  font-family: ${fonts.montserratBold};
  font-size: ${fontSizes.h5};
  text-align: center;
  margin: 24px 0 32px;
`;

export const LogoPlus = styled.Text`
  color: ${theme.secondary};
  font-family: ${fonts.montserratBold};
  font-size: ${fontSizes.h4};
  text-align: center;
  margin-bottom: 32px;
`;
