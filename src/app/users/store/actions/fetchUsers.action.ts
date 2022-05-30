import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '../actionTypes';
import {UserInterface} from '../../../shared/types/user.interface';

export const fetchUsersAction = createAction(
  ActionTypes.FETCH_USERS
)

export const fetchUsersSuccessAction = createAction(
  ActionTypes.FETCH_USERS_SUCCESS,
  props<{users: UserInterface[]}>()
)

export const fetchUsersFailureAction = createAction(
  ActionTypes.FETCH_USERS_FAILURE
)
