import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Dispatch} from 'redux';
//import {UserAccount as UserAccountType} from 'react-native-force/src/typings/oauth';
//import {oauth} from 'react-native-force';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {alertAltMessage, errorMessage} from '../../../helpers/app.helpers';
import {ThunkReturnType} from '../../../types/utils.types';
import {userAccountAction} from '../../slices/common.slice';
import {Routes} from '../../../constants/routes.constants';
import {PROLIFIQ_ACE_TOKEN} from '../../../constants/app.constants';

export function logInThunk(
  navigation: NavigationProp<ParamListBase>,
): ThunkReturnType {
  return async (dispatch: Dispatch): Promise<void> => {
    try {
      let data: {} = {
        username: 'temp',
        id: '22',
        name: 'ravi',
        last_name: 'sharma',
      };
      dispatch(userAccountAction(data));
      AsyncStorage.setItem(PROLIFIQ_ACE_TOKEN, JSON.stringify(data));
      navigation.reset({index: 0, routes: [{name: Routes.Root}]});
      // await oauth.authenticate(
      //   (data: UserAccountType) => {
      //     dispatch(userAccountAction(data));
      //     AsyncStorage.setItem(PROLIFIQ_ACE_TOKEN, JSON.stringify(data));
      //     navigation.reset({index: 0, routes: [{name: Routes.Root}]});
      //   },
      //   (error: Error) => {
      //     alertAltMessage(error?.name, error?.message);
      //   },
      // );
    } catch (error) {
      const {title, msg} = errorMessage(
        'Login Failed',
        'Please try again',
        error,
      );
      alertAltMessage(title, msg);
    }
  };
}
