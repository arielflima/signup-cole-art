import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #000;
  /* border: 1px solid #fff; */
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  /* border: solid 1px #fff; */
`;

export const LogoSign = styled.Image`
  width: 350px;
  height: 250px;
`;

export const Title = styled.Text`
  color: #eeeeee;
  font-size: 42px;
`;

export const Text = styled.Text`
  font-size: 18px;
  text-align: center;
  color: #eeeeee;
`;

export const TextInput = styled.TextInput`
  border: solid 1px #eee;
  font-size: 14px;
  color: #eee;
  background-color: #000;
  width: 300px;
  height: 30px;
  margin-top: 20px;
  border-radius: 5px;
  padding: 0 15px;
`;

export const SignInButton = styled(RectButton)`
  background-color: #0d7377;
  width: 300px;
  height: 40px;
  border: solid 1px #fff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 30px;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #eee;
`;

export const Footer = styled.View`
  width: 300px;
  flex-direction: row;
  margin-top: 20px;
`;

export const TextFooter = styled.Text`
  color: #eee;
`;

export const LinkFooter = styled.Text`
  font-weight: bold;
  margin-left: 3px;
  color: #0d7377;
`;
