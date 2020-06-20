import styled from "styled-components/native";

import { theme, fonts, fontSizes } from "../../styles/global";

export const Wrapper = styled.SafeAreaView`
  background: ${theme.primaryLight};
  flex: 1;
  padding: 0 15px;
  align-items: center;
`;

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: ${fontSizes.h6};
  font-family: ${fonts.montserratBold};
  color: ${theme.secondary};
  margin-bottom: 20px;
`;

export const CardTitle = styled.Text`
  font-size: ${fontSizes.p16};
  font-family: ${fonts.montserratBold};
  color: ${theme.secondary};
  text-align: center;
  padding: 4px 0;
  margin: 0 0 12px;
`;

export const Card = styled.TouchableOpacity`
  width: 360px;
  height: 220px;
  padding: 36px 8px;
  margin-bottom: 20px;
  background: ${theme.white};
  border-radius: 8px;
`;

export const Img = styled.Image``;
