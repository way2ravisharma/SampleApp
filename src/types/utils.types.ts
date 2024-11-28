import { Dispatch } from "redux";

export declare type ThunkReturnType<T = void> = (
  dispatch: Dispatch,
  getState: () => any
) => Promise<T>;
