//import { UserAccount as UserAccountType } from "react-native-force/src/typings/oauth";

export type CommonSliceType = {
  loader: LoaderType;
  userAccount: any;
};

export type LoaderType = {text: string; show: boolean};

export type TabBarIconType = {focused: boolean; color: string; size: number};

export type ErrorMessageType = {title: string; msg: string};
