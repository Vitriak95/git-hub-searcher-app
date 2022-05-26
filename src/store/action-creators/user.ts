import {UserAction, UserActionTypes} from '../../types/user';
import {Dispatch} from 'redux';
import axios from 'axios';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => { // redux thunk
    try {
      // start action
      dispatch({type: UserActionTypes.FETCH_USERS})

      // success
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data
      })

    } catch (e: any) {
      // error
      dispatch({
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: 'Произошла ошибка при загрузке пользователей'
      })
    }
  }
}
