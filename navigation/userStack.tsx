import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from "../screens/CalendarScreen";
import EvaluationsScreen from '../screens/EvaluationScreen';
import ViewScreen from '../screens/ViewScreen';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Evaluation" component={EvaluationsScreen} />
        <Stack.Screen name="ViewScreen" component={ViewScreen} />
        {/* Las pantallas a las que el usuario pueda entrar */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
