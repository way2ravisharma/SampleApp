import {Dispatch} from 'redux';
import {ParamListBase} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core/lib/typescript/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {UserAccount as UserAccountType} from 'react-native-force/src/typings/oauth';
// import {oauth} from 'react-native-force';
import {ThunkReturnType} from '../../../types/utils.types';
import {loaderAction} from '../../slices/common.slice';
import {Routes} from '../../../constants/routes.constants';
import {PROLIFIQ_ACE_TOKEN} from '../../../constants/app.constants';

export function logOutThunk(
  navigation: NavigationProp<ParamListBase>,
): ThunkReturnType {
  return async (dispatch: Dispatch): Promise<void> => {
    const logOutClear = (): void => {
      AsyncStorage.removeItem(PROLIFIQ_ACE_TOKEN);
      // dispatch(userAccountAction({} as UserAccountType));
      navigation.reset({index: 0, routes: [{name: Routes.LogIn}]});
      dispatch(loaderAction({text: '', show: false}));
    };

    try {
      dispatch(loaderAction({text: 'Logging out...', show: false}));
      logOutClear();
      // oauth.logout(
      //   () => logOutClear(),
      //   () => logOutClear(),
      // );
    } catch (error) {
      logOutClear();
    }
  };
}
