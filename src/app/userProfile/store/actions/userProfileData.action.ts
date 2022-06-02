import {ActionTypes} from '../actionTypes';
import {createAction, props} from '@ngrx/store';
import {UserProfileDataInterface} from '../../../shared/types/userProfileData.interface';

export const fetchUserProfileDataAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_DATA,
  props<{username: string}>()
)

export const fetchUserProfileDataSuccessAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_DATA_SUCCESS,
  props<{userData: UserProfileDataInterface}>()
)

export const fetchUserProfileDataFailureAction = createAction(
  ActionTypes.FETCH_USER_PROFILE_DATA_FAILURE
)

