import React, { useCallback, useRef } from 'react';

import api from '../../services/api';

import { Container, Title, Content, Text, LogoSign } from './styles';
import WelcomeImage from '../../assets/welcome.png';

interface SignUpFormData {
  username: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef(null);

  const handleSignUp = useCallback(() => {
    console.log('tests');
  }, []);

  return (
    <Container>
      <Content>
        <LogoSign source={WelcomeImage} />
        <Title>Welcome home</Title>
        <Text>We always have a cup of hot tea and a warm blanket</Text>
      </Content>
    </Container>
  );
};

export default Home;
