import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '../../shared/types/appState.interface';
import {UsersStateInterface} from '../types/usersState.interface';

export const usersFeatureSelector = createFeatureSelector<
    AppStateInterface,
    UsersStateInterface
  >('users');

export const isLoadingUsersSelector = createSelector(
  usersFeatureSelector,
  (state) => state.loading
)

export const usersDataSelector = createSelector(
  usersFeatureSelector,
  (state) => state.data
)

export const isErrorUsersSelector = createSelector(
  usersFeatureSelector,
  (state) => state.error
)
