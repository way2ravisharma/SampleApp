import {Platform} from 'react-native';

export const timeOut = 300000; /* ms, *0 - no timeout */

export const NumericRegex = /^([0-9]{0,100})+$/;

export const PROLIFIQ_ACE_TOKEN = '@Temp_not_working_TK_01';

export const TimeOut = Platform.OS === 'ios' ? 100 : 0;

export const EmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
