import {UserAction, UserActionTypes, UserStateInterface} from '../../types/user';

const initialState: UserStateInterface = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UserAction): UserStateInterface => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: []
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload
      }
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: []
      }

    default:
      return state
  }
}
