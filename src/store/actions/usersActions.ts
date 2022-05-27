import {UsersActionTypes} from '../action-types/usersActionTypes';

export interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS
}

export interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS,
  payload: any
}

export interface FetchUsersFailureAction {
  type: UsersActionTypes.FETCH_USERS_FAILURE,
  payload: any
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction;
