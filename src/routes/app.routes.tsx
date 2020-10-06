import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator initialRouteName="Home">
      <App.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000' },
        }}
      />
      <App.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000' },
        }}
      />
    </App.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
