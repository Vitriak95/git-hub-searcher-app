export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE',
}

export interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}
export interface FetchUsersSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[]
}
export interface FetchUsersFailureAction {
  type: UserActionTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersFailureAction;

export interface UserStateInterface {
  users: any[];
  loading: boolean;
  error: null | string;
}
