import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from '../helpers/app.helpers';
import BottomTabNavigator from './bottom-tab.component';
import {Routes} from '../constants/routes.constants';
import LogInScreen from '../components/log-in/log-in.component';

const Stack = createStackNavigator();

export default function Navigations(): React.ReactElement {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false, detachPreviousScreen: true}}
        initialRouteName={Routes.LogIn}
        detachInactiveScreens>
        <Stack.Screen name={Routes.Root} component={BottomTabNavigator} />
        <Stack.Screen
          name={Routes.LogIn}
          component={LogInScreen}
          options={{title: 'Log In'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
