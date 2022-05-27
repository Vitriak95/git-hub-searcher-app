import {UserRepositoriesActionTypes} from '../action-types/userRepositoriesActionTypes';

export interface FetchUserRepositoriesAction {
  type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES;
}

export interface FetchUserRepositoriesSuccessAction {
  type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_SUCCESS;
  payload: any; // TODO remove any
}

export interface FetchUserRepositoriesFailureAction {
  type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_FAILURE;
  payload: string;
}

export type UserRepositoriesAction = FetchUserRepositoriesAction | FetchUserRepositoriesSuccessAction | FetchUserRepositoriesFailureAction;
