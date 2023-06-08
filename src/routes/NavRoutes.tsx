import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../modules/Home/HomeScreen';
import CatScreen from '../modules/Cat/CatScreen';
import TimerScreen from '../modules/Timer/TimerScreen';
import ProfileScreen from '../modules/Profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const NavRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cat" component={CatScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavRoutes;
