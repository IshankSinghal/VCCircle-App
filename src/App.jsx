import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Subscribe from './screens/Subscribe';
import Industry from './screens/Industry';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Industry" component={Industry} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
