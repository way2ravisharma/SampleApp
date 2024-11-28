import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {UserAccount as UserAccountType} from 'react-native-force/src/typings/oauth';
import {CommonSliceType, LoaderType} from '../../types/common.types';

export const sliceName = 'common';

export const initialState: CommonSliceType = {
  loader: {text: '', show: false},
  userAccount: {} as any,
};

export const commonSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    loaderAction: (
      state: CommonSliceType,
      action: PayloadAction<LoaderType>,
    ): void => {
      state.loader = action.payload;
    },
    userAccountAction: (
      state: CommonSliceType,
      action: PayloadAction<any>,
    ): void => {
      state.userAccount = action.payload;
    },
  },
});

export const {loaderAction, userAccountAction} = commonSlice.actions;
