import {
  Alert,
  AlertButton,
  AlertOptions,
  Platform,
  ToastAndroid,
} from 'react-native';
import {createRef} from 'react';
import {TimeOut} from '../constants/app.constants';
import {ErrorMessageType} from '../types/common.types';

export const navigationRef = createRef<any>();

export const alertMessage = (
  title: string,
  message?: string,
  buttons?: AlertButton[],
  options?: AlertOptions,
): void => {
  setTimeout(() => {
    Alert.alert(title, message, buttons, options);
  }, TimeOut);
};

export const alertAltMessage = (title: string, message?: string): void => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(`${title}, ${message}`, ToastAndroid.LONG);
  } else {
    setTimeout(() => {
      Alert.alert(title, message);
    }, TimeOut);
  }
};

export const errorMessage = (
  title: string,
  msg: string,
  error: any,
): ErrorMessageType => {
  title = title || 'System Error';
  msg = error?.message || undefined;
  if (error?.message === 'Network Error') {
    title = 'Network Error';
    msg = 'please connect to internet';
  }
  return {title, msg};
};

export const confirmButtons = (
  no: AlertButton,
  yes: AlertButton,
): AlertButton[] => {
  if (Platform.OS === 'ios') {
    return [no, yes];
  }
  return [no, {}, yes];
};
