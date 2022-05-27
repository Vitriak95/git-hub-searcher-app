import {UsersAction} from '../actions/usersActions';
import {UsersActionTypes} from '../action-types/usersActionTypes';
import {UserInterface} from '../../common/types';
import {FetchUsersDataResponseInterface} from '../types/users';
import {AxiosResponse} from 'axios';

export interface UsersStateInterface {
  data: AxiosResponse<FetchUsersDataResponseInterface> | null;
  loading: boolean;
  error: null | any;
}

const initialState: UsersStateInterface = {
  data: null,
  loading: false,
  error: null
}

export const usersReducer = (state = initialState, action: UsersAction) => {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return {
        ...state,
        loading: true
      }
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case UsersActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
