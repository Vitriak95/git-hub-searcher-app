import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../shared/types/appState.interface';
import {UserProfileStateInterface} from '../types/userProfileState.interface';

const userProfileFeatureSelector = createFeatureSelector<
  AppStateInterface,
  UserProfileStateInterface
  >('userProfile');

export const isLoadingUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state) => state.loading
)

export const isErrorUserProfileSelector = createSelector(
  userProfileFeatureSelector,
  (state) => state.error
)

export const userProfileDataSelector = createSelector(
  userProfileFeatureSelector,
  (state) => state.data
)
