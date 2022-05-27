import {AxiosResponse} from 'axios';
import {ProfileUserAction} from '../actions/profileUserActions';
import {ProfileUserActionTypes} from '../action-types/profileUserActionTypes';

export interface ProfileUserStateInterface {
  data: AxiosResponse<any> | null; // TODO remove any
  loading: boolean;
  error: null | any;
}

const initialState: ProfileUserStateInterface = {
  data: null,
  loading: false,
  error: null
}

export const profileUserReducer = (state: ProfileUserStateInterface = initialState, action: ProfileUserAction): ProfileUserStateInterface => {
  switch (action.type) {
    case ProfileUserActionTypes.FETCH_PROFILE_USER:
      return {
        ...state,
        loading: true
      }
    case ProfileUserActionTypes.FETCH_PROFILE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case ProfileUserActionTypes.FETCH_PROFILE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
