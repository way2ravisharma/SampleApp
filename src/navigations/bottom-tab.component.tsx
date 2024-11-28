import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// import {UserAccount as UserAccountType} from 'react-native-force/src/typings/oauth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Routes} from '../constants/routes.constants';
import {TabBarIconType} from '../types/common.types';
import {userAccountSelector} from '../store/selectors/common.selector';
import {commonStyles} from '../components/common/common.style';
import {ContactsStacks, HomeStacks, ProfileStacks} from './stacks.component';

const BottomTab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function BottomTabNavigator(): React.ReactElement {
  const navigation = useNavigation();
  const userAccount: any = useSelector(userAccountSelector);
  const {userId = ''} = userAccount;

  useEffect(() => {
    if (!userId) {
      // navigation.reset({ index: 0, routes: [{ name: Routes.LogIn }] });
    }
  }, [navigation, userId]);

  return (
    <BottomTab.Navigator
      initialRouteName={Routes.HomeTab}
      screenOptions={{unmountOnBlur: true, tabBarHideOnKeyboard: true}}>
      <BottomTab.Screen
        name={Routes.ContactsTab}
        component={ContactsStacks}
        options={{
          /*tabBarIcon: (props: TabBarIconType) => (
            <FontAwesome5
              style={commonStyles.bottomIcon}
              name="user"
              color={props.color}
            />
          ),*/
          title: 'Contacts',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={Routes.HomeTab}
        component={HomeStacks}
        options={{
          /* tabBarIcon: (props: TabBarIconType) => (
            <MaterialCommunityIcons
              style={commonStyles.bottomIcon}
              name="home"
              color={props.color}
            />
          ),*/
          title: 'Home',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name={Routes.ProfileTab}
        component={ProfileStacks}
        options={{
          /*tabBarIcon: (props: TabBarIconType) => (
            <FontAwesome5
              style={commonStyles.bottomIcon}
              name="user-alt"
              color={props.color}
            />
          ),*/
          title: 'Profile',
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
