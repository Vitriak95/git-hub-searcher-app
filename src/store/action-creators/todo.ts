import {Dispatch} from 'redux';
import {TodoAction, TodoActionTypesEnum} from '../../types/todo';
import axios from 'axios';

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({
        type: TodoActionTypesEnum.FETCH_TODOS
      })
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _page: page,
          _limit: limit
        }
      });
      dispatch({
        type: TodoActionTypesEnum.FETCH_TODOS_SUCCESS,
        payload: response.data
      })
    } catch (e) {
      dispatch({
        type: TodoActionTypesEnum.FETCH_TODOS_FAILURE,
        payload: 'Произошла ошибка при загрузке списка дел'
      })
    }
  }
}

export const setTodoPage = (page: number): TodoAction => {
  return {
    type: TodoActionTypesEnum.SET_TODO_PAGE,
    payload: page
  }
}
