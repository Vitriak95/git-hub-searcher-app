import {ProfileUserActionTypes} from '../action-types/profileUserActionTypes';

export interface FetchProfileUserAction {
  type: ProfileUserActionTypes.FETCH_PROFILE_USER;
}

export interface FetchProfileUserSuccessAction {
  type: ProfileUserActionTypes.FETCH_PROFILE_USER_SUCCESS;
  payload: any; // TODO remove any
}

export interface FetchProfileUserFailureAction {
  type: ProfileUserActionTypes.FETCH_PROFILE_USER_FAILURE;
  payload: string;
}

export type ProfileUserAction = FetchProfileUserAction | FetchProfileUserSuccessAction | FetchProfileUserFailureAction;
