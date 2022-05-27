import {UsersActionTypes} from '../action-types/usersActionTypes';
import {FetchUsersAction, FetchUsersFailureAction, FetchUsersSuccessAction, UsersAction} from '../actions/usersActions';
import {Dispatch} from 'redux';
import {RootState} from '../reducers/rootReducer';
import axios from 'axios';
import {baseApiUrl} from '../../common/variables';
// import {FetchUsersDataResponseInterface} from '../types/users';
import {UserInterface} from '../../common/types';

const fetchUsersAC = (): FetchUsersAction => {
  return {
    type: UsersActionTypes.FETCH_USERS
  }
}
const fetchUsersSuccessAC = (data: UserInterface[]): FetchUsersSuccessAction => {
  return {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: data
  }
}
const fetchUsersFailureAC = (error: string): FetchUsersFailureAction => {
  return {
    type: UsersActionTypes.FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>, getState: () => RootState) => {
    dispatch(fetchUsersAC());
    try {
      const response: UserInterface[] = await axios.get(`${baseApiUrl}/users?per_page=100`).then((response) => {
        return response.data
      });
      console.log('fetchUsers response', response)
      dispatch(fetchUsersSuccessAC(response));
    } catch (e) {
      dispatch(fetchUsersFailureAC('Что-то пошло не так!'))
    }
  }
}
