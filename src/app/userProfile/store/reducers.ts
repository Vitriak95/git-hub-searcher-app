import {Action, createReducer, on} from '@ngrx/store';
import {UserProfileStateInterface} from '../types/userProfileState.interface';
import {ofType} from '@ngrx/effects';
import {
  fetchUserProfileDataAction,
  fetchUserProfileDataFailureAction,
  fetchUserProfileDataSuccessAction
} from './actions/userProfileData.action';

const initialState: UserProfileStateInterface = {
  data: null,
  loading: false,
  error: null
}

const userProfileReducers = createReducer(
  initialState,
  on(
    fetchUserProfileDataAction,
    (state): UserProfileStateInterface => {
      return {
        ...state,
        loading: true,
        data: null
      }
    }
  ),
  on(
    fetchUserProfileDataSuccessAction,
    (state, action): UserProfileStateInterface => {
      console.log('action', action)
      return {
        ...state,
        loading: false,
        data: action.userData
      }
    }
  ),
  on(
    fetchUserProfileDataFailureAction,
    (state): UserProfileStateInterface => {
      return {
        ...state,
        loading: false,
        error: 'Что-то пошло не так'
      }
    }
  )
)

export function reducers(state: UserProfileStateInterface, action: Action) {
  return userProfileReducers(state, action)
}
