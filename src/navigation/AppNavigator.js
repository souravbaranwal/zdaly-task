import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {getItem} from '../helpers/asyncStore';
import {screenNames} from './screenNames';
import {Login, Details, Disclaimer, Stations} from '../screens';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const [isVisited, setIsVisited] = useState(null);

  useEffect(() => {
    const checkIsVisited = async () => {
      const visited = await getItem('isVisited');
      setIsVisited(visited || false);
    };
    checkIsVisited();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name={screenNames.Login} component={Login} />
        <Stack.Screen name={screenNames.Disclaimer} component={Disclaimer} />
        <Stack.Screen name={screenNames.Details} component={Details} />
        <Stack.Screen name={screenNames.Stations} component={Stations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
