import {
  FetchUserRepositoriesAction,
  FetchUserRepositoriesFailureAction,
  FetchUserRepositoriesSuccessAction, UserRepositoriesAction
} from '../actions/userRepositoriesActions';
import {UserRepositoriesActionTypes} from '../action-types/userRepositoriesActionTypes';
import {Dispatch} from 'redux';
import {RootState} from '../reducers/rootReducer';
import axios from 'axios';
import {baseApiUrl} from '../../common/variables';

const fetchUserRepositoriesAC = (): FetchUserRepositoriesAction => {
  return {
    type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES
  }
}
const fetchUserRepositoriesSuccessAC = (data: any): FetchUserRepositoriesSuccessAction => {
  return {
    type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_SUCCESS,
    payload: data
  }
}
const fetchUserRepositoriesFailureAC = (error: string): FetchUserRepositoriesFailureAction => {
  return {
    type: UserRepositoriesActionTypes.FETCH_USER_REPOSITORIES_FAILURE,
    payload: error
  }
}

export const fetchUserRepositories = (userName: string) => {
  return async (dispatch: Dispatch<UserRepositoriesAction>, getState: () => RootState) => {
    dispatch(fetchUserRepositoriesAC());
    try {
      const response = await axios.get(`${baseApiUrl}/users/${userName}/repos?per_page=100`).then(res => res.data);
      dispatch(fetchUserRepositoriesSuccessAC(response));
    } catch (e) {
      dispatch(fetchUserRepositoriesFailureAC('При загрузке списка репозиториев произошел сбой! Попробуйте позже!'))
    }
  }
}
