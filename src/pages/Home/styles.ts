import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  align-items: center;
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  width: 300px;
  height: 500px;
  border: #000;
  margin-top: 30%;
`;

export const LogoSign = styled.Image`
  width: 260px;
  height: 190px;
`;

export const Title = styled.Text`
  font-size: 42px;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
`;
