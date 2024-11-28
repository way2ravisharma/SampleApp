/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import store from './src/store/slices/index.slice';
import Navigations from './src/navigations/navigations.component';
import Loader from './src/components/common/loader/loader.component';
function App(): JSX.Element {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigations />
            <Loader />
            <StatusBar />
          </SafeAreaProvider>
        </Provider>
      </ApplicationProvider>
    </>
  );
}
export default App;
