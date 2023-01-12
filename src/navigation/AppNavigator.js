import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useQueryClient} from 'react-query';

import {screenNames} from './screenNames';
import {Login, Details, Disclaimer, Stations} from '../screens';
import {configureAxios} from '../config/axios';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const isLoggedIn = useSelector(({auth: {isLoggedIn}}) => isLoggedIn);
  const isOnboarded = useSelector(({auth: {isOnboarded}}) => isOnboarded);
  const queryClient = useQueryClient();

  useEffect(() => {
    configureAxios();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      queryClient.removeQueries();
    }
  }, [isLoggedIn, queryClient]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
        })}>
        {isLoggedIn ? (
          <>
            {isOnboarded ? (
              <>
                <Stack.Screen
                  name={screenNames.Stations}
                  component={Stations}
                />
                <Stack.Screen name={screenNames.Details} component={Details} />
              </>
            ) : (
              <Stack.Screen
                name={screenNames.Disclaimer}
                component={Disclaimer}
              />
            )}
          </>
        ) : (
          <>
            <Stack.Screen name={screenNames.Login} component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
