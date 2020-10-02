import React, { useState, useCallback, useEffect } from 'react';

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
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');

  const [users, setUsers] = useState({});
  const [passwords, setPasswords] = useState({});

  const handleUsernameText = useCallback(text => {
    setUsername(text);
  }, []);

  const handlePasswordText = useCallback(text => {
    setPassword(text);
  }, []);

  const handleSignIn = useCallback(() => {
    console.log(users, passwords);
  }, []);

  useEffect(() => {
    api.get('/users').then(({ data }) => setUsers);
  }, []);

  return (
    <Container>
      <Content>
        <LogoSign source={WelcomeImage} />
        <Title>Welcome home</Title>
        <Text>We always have a cup of hot tea and a warm blanket</Text>
        <TextInput onChangeText={handleUsernameText} value={username} />
        <TextInput onChangeText={handlePasswordText} value={password} />
        <SignInButton onPress={handleSignIn}>
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
