import React, { useCallback, useRef } from 'react';

import api from '../../services/api';

import {
  Container,
  Title,
  Content,
  Text,
  LogoSign,
  TextInput,
  SignInButton,
  TextButton,
  Footer,
  TextFooter,
  LinkFooter,
} from './styles';
import WelcomeImage from '../../assets/welcome.png';

interface SignUpFormData {
  username: string;
  password: string;
}

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoSign source={WelcomeImage} />
        <Title>Welcome home</Title>
        <Text>We always have a cup of hot tea and a warm blanket</Text>
        <TextInput value="Username" />
        <TextInput value="Password" />
        <SignInButton>
          <TextButton>Sign In</TextButton>
        </SignInButton>
        <Footer>
          <TextFooter>I dont have account yet.</TextFooter>
          <LinkFooter>Sign Up</LinkFooter>
        </Footer>
      </Content>
    </Container>
  );
};

export default Home;
