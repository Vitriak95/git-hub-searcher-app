import {UsersActionTypes} from '../action-types/usersActionTypes';
import {UserInterface} from '../../common/types';

export interface FetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: UserInterface[];
}

export interface FetchUsersFailureAction {
  type: UsersActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type UsersAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction;
