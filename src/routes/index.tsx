import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import PokemonScreen from '../pages/PokemonScreen';

const AppNavigation = createStackNavigator();

const AppNavigationRoutes: React.FC = () => (
  <AppNavigation.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <AppNavigation.Screen name="HomeScreen" component={HomeScreen} />
    <AppNavigation.Screen name="PokemonScreen" component={PokemonScreen} />
  </AppNavigation.Navigator>
);

export default AppNavigationRoutes;
