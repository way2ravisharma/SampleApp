import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {styles} from '../log-in/log-in.style';
import {logOutThunk} from '../../store/thunks/common/log-out.thunk';

export default function ProfileScreen(): React.ReactElement {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const logOut = (): void => {
    dispatch(logOutThunk(navigation));
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button style={styles.button} onPress={logOut} status="danger">
        LOG OUT
      </Button>
    </View>
  );
}
