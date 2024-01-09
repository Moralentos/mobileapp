import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import AuthorScreen from './screen/AuthorScreen';
import InputScreen from './screen/InputScreen';

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Author' component={AuthorScreen} />
        <Stack.Screen name='Input' component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
