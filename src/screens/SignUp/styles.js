import styled from "styled-components/native";

import { theme, fonts, fontSizes } from "../../styles/global";

export const Wrapper = styled.SafeAreaView`
  background: ${theme.primaryLight};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  display: flex;
  width: 360px;
`;

export const Title = styled.Text`
  color: ${theme.white};
`;

export const InputLabel = styled.Text`
  color: ${theme.white};
  margin-bottom: 4px;
  font-family: ${fonts.montserratLight};
`;

export const ButtonLabel = styled.Text`
  color: ${theme.white};
  text-align: center;
  font-family: ${fonts.montserratBold};
`;

export const Input = styled.TextInput`
  background: ${theme.primary};
  padding: 8px 0;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const SignButton = styled.TouchableOpacity`
  background: ${theme.secondary};
  padding: 16px 0;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const SignOptions = styled.TouchableOpacity`
  color: ${theme.white};
  text-align: center;
  font-family: ${fonts.montserratRegular};
`;
