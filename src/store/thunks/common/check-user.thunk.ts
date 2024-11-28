import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Dispatch} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {UserAccount as UserAccountType} from 'react-native-force/src/typings/oauth';
//import {oauth} from 'react-native-force';
import {ThunkReturnType} from '../../../types/utils.types';
import {loaderAction, userAccountAction} from '../../slices/common.slice';
import {Routes} from '../../../constants/routes.constants';
import {PROLIFIQ_ACE_TOKEN} from '../../../constants/app.constants';
import {Alert} from 'react-native';

export function checkUserThunk(
  navigation: NavigationProp<ParamListBase>,
): ThunkReturnType {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      dispatch(loaderAction({show: true, text: 'Checking user...'}));
      const response = await AsyncStorage.getItem(PROLIFIQ_ACE_TOKEN);
      const userData: any = response && JSON.parse(response);
      if (userData?.userId) {
        dispatch(userAccountAction(userData));
        navigation.reset({index: 0, routes: [{name: Routes.Root}]});
        dispatch(loaderAction({show: false, text: ''}));
      } else {
        navigation.reset({index: 0, routes: [{name: Routes.LogIn}]});
        dispatch(loaderAction({show: false, text: ''}));
      } /*else {
        oauth.getAuthCredentials(
          (data: UserAccountType) => {
            dispatch(userAccountAction(data));
            AsyncStorage.setItem(PROLIFIQ_ACE_TOKEN, JSON.stringify(data));
            navigation.reset({index: 0, routes: [{name: Routes.LogIn}]});
            dispatch(loaderAction({show: false, text: ''}));
          },
          () => {
            dispatch(loaderAction({show: false, text: ''}));
          },
        );
      }*/
    } catch (e) {
      dispatch(loaderAction({show: false, text: ''}));
    }
  };
}
