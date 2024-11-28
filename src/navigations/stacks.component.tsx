import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Routes} from '../constants/routes.constants';
import HomeScreen from '../components/home/home.component';
import ProfileScreen from '../components/profile/profile.component';
import ContactsScreen from '../components/contacts/contacts.component';

const Stack = createStackNavigator();

export const HomeStacks = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Home}
      component={ContactsScreen}
      options={{title: 'Home'}}
    />
  </Stack.Navigator>
);

export const ContactsStacks = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Contacts}
      component={HomeScreen}
      options={{title: 'Contacts'}}
    />
  </Stack.Navigator>
);

export const ProfileStacks = (): React.ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Profile}
      component={ProfileScreen}
      options={{title: 'Profile'}}
    />
  </Stack.Navigator>
);
