import {createSelector} from 'reselect';
import {sliceName} from '../slices/common.slice';
import {CommonSliceType} from '../../types/common.types';

const commonSliceSelector = (state: {
  [sliceName]: CommonSliceType;
}): CommonSliceType => state[sliceName];

export const loaderSelector = createSelector(
  commonSliceSelector,
  (state: CommonSliceType) => state.loader,
);

export const userAccountSelector = createSelector(
  commonSliceSelector,
  (state: CommonSliceType) => state.userAccount,
);
