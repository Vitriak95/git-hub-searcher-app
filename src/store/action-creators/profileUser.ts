import {ProfileUserActionTypes} from '../action-types/profileUserActionTypes';
import {Dispatch} from 'redux';
import {
  FetchProfileUserAction,
  FetchProfileUserFailureAction,
  FetchProfileUserSuccessAction,
  ProfileUserAction
} from '../actions/profileUserActions';
import {RootState} from '../reducers/rootReducer';
import axios from 'axios';
import {baseApiUrl} from '../../common/variables';

const fetchProfileUserAC = (): FetchProfileUserAction => {
  return {
    type: ProfileUserActionTypes.FETCH_PROFILE_USER
  }
}

const fetchProfileUserSuccessAC = (data: any): FetchProfileUserSuccessAction => {
  return {
    type: ProfileUserActionTypes.FETCH_PROFILE_USER_SUCCESS,
    payload: data
  }
}

const fetchProfileUserFailureAC = (error: string): FetchProfileUserFailureAction => {
  return {
    type: ProfileUserActionTypes.FETCH_PROFILE_USER_FAILURE,
    payload: error
  }
}

export const fetchProfileUserData = (userName: string) => {
  return async (dispatch: Dispatch<ProfileUserAction>, getState: () => RootState) => {
    dispatch(fetchProfileUserAC());
    try {
      const response = await axios.get(`${baseApiUrl}/users/${userName}`).then(res => res.data);
      dispatch(fetchProfileUserSuccessAC(response));
    } catch (e) {
      dispatch(fetchProfileUserFailureAC('При загрузке профиля, что-то пошло не так!'))
    }
  }
}
