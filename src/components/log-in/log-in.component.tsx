import {Button, Divider, Layout, Text} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {styles} from './log-in.style';
import {commonStyles} from '../common/common.style';
import {logInThunk} from '../../store/thunks/common/log-in.thunk';
import {checkUserThunk} from '../../store/thunks/common/check-user.thunk';

export default function LogInScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}): React.ReactElement {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // @ts-ignore
  //   dispatch(checkUserThunk(navigation));
  // }, [dispatch, navigation]);

  const logIn = (): void => {
    // @ts-ignore
    dispatch(logInThunk(navigation));
  };

  return (
    <ScrollView style={commonStyles.whiteBackground}>
      <Layout style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} category="h6">
            PROLIFIQ ACE
          </Text>
        </View>
        <Divider />
        <Button style={styles.button} onPress={logIn}>
          LOG IN
        </Button>
      </Layout>
    </ScrollView>
  );
}
