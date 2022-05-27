import {UserRepositoriesAction} from '../actions/userRepositoriesActions';
import {UserRepositoriesActionTypes} from '../action-types/userRepositoriesActionTypes';

export interface UserRepositoriesStateInterface {
  data: any | null;
  loading: boolean;
  error: string | null;
}
const initialState: UserRepositoriesStateInterface = {
  data: null,
  loading: false,
  error: null
}

export const userRepositoriesReducer = (state: UserRepositoriesStateInterface = initialState, action: UserRepositoriesAction) => {
  switch (action.type) {
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES:
      return {
        ...state,
        loading: true,
        data: null
      }
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
