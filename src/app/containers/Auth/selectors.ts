import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';

import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.auth || initialState;

export const selectData = createSelector([selectDomain], state => state.data);

export const selectLoading = createSelector(
  [selectDomain],
  state => state.loading,
);

export const selectError = createSelector([selectDomain], state => state.error);

export const selectAccount = createSelector(
  [selectDomain],
  state => state.account,
);

export const selectSignup = createSelector(
  [selectDomain],
  state => state.signup,
);
