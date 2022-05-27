import {UsersActionTypes} from '../action-types/usersActionTypes';
import {FetchUsersAction, FetchUsersFailureAction, FetchUsersSuccessAction, UsersAction} from '../actions/usersActions';
import {Dispatch} from 'redux';
import {RootState} from '../reducers/rootReducer';
import axios, {AxiosResponse} from 'axios';
import {baseApiUrl} from '../../common/variables';
import {FetchUsersDataResponseInterface} from '../types/users';

const fetchUsersAC = (): FetchUsersAction => {
  return {
    type: UsersActionTypes.FETCH_USERS
  }
}
const fetchUsersSuccessAC = (data: any): FetchUsersSuccessAction => {
  return {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: data
  }
}
const fetchUsersFailureAC = (error: any): FetchUsersFailureAction => {
  return {
    type: UsersActionTypes.FETCH_USERS_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>, getState: () => RootState) => {
    dispatch(fetchUsersAC());
    try {
      const response: AxiosResponse<FetchUsersDataResponseInterface> = await axios.get(`${baseApiUrl}/users?per_page=100`);
      console.log('fetchUsers response', response)
      dispatch(fetchUsersSuccessAC(response));
    } catch (e) {
      dispatch(fetchUsersFailureAC('Что-то пошло не так!'))
    }
  }
}
