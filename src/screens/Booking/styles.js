import styled from "styled-components/native";

import { theme, fonts, fontSizes } from "../../styles/global";

export const Wrapper = styled.SafeAreaView`
  background: ${theme.primaryLight};
  flex: 1;
`;

export const Container = styled.ScrollView`
  display: flex;
  padding: 0 15px;
`;

export const ScreenTitle = styled.Text`
  font-size: ${fontSizes.h6};
  font-family: ${fonts.montserratBold};
  color: ${theme.secondary};
  margin-bottom: 24px;
`;

export const HourText = styled.Text`
  font-size: ${fontSizes.p16};
  font-family: ${fonts.montserratRegular};
  color: ${theme.white};
`;

export const DatePicker = styled.TouchableOpacity`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.primary};
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const InputLabel = styled.Text`
  font-size: ${fontSizes.p16};
  font-family: ${fonts.montserratLight};
  color: ${theme.white};
  margin-bottom: 12px;
`;

export const HourContainer = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  margin-bottom: 20px;
`;

export const HourCard = styled.TouchableOpacity`
  background: ${theme.primary};
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  margin-right: 8px;
  border-radius: 8px;
`;

export const ButtonLabel = styled.Text`
  color: ${theme.white};
  font-family: ${fonts.montserratBold};
  font-size: ${fontSizes.p16};
  text-align: center;
`;

export const PrimaryButton = styled.TouchableOpacity`
  background: ${theme.secondary};
  padding: 16px 0;
  border-radius: 8px;
`;

export const RestaurantArea = styled.View`
  width: 100%;
  height: 220px;
  margin-bottom: 20px;
  border-radius: 8px;
  background: ${theme.primary};
`;
