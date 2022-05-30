import {Action, createReducer, on} from '@ngrx/store';
import {UsersStateInterface} from '../types/usersState.interface';
import {fetchUsersAction, fetchUsersFailureAction, fetchUsersSuccessAction} from './actions/fetchUsers.action';

const initialState: UsersStateInterface = {
  data: null,
  loading: false,
  error: null
}

const homeReducers = createReducer(
  initialState,
  on(
    fetchUsersAction,
    (state): UsersStateInterface => ({
      ...state,
      loading: true
    })
  ),
  on(
    fetchUsersSuccessAction,
    (state, action): UsersStateInterface => {
      return {
        ...state,
        loading: false,
        data: action.users
      }
    }
  ),
  on(
    fetchUsersFailureAction,
    (state): UsersStateInterface => ({
      ...state,
      loading: false,
      error: 'fetchUsersAction error!'
    })
  ),
)

export function reducers(state: UsersStateInterface, action: Action) {
  return homeReducers(state, action)
}
