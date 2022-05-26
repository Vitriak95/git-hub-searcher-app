import {TodoAction, TodoActionTypesEnum, TodoStateInterface} from '../../types/todo';

const initialState: TodoStateInterface = {
  todos: [],
  loading: false,
  error: null,
  limit: 10,
  page: 1
}

export const todoReducer = (state: TodoStateInterface = initialState, action: TodoAction): TodoStateInterface => {
  switch (action.type) {
    case TodoActionTypesEnum.FETCH_TODOS:
      return {
        ...state,
        loading: true
      }
    case TodoActionTypesEnum.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload
      }
    case TodoActionTypesEnum.FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case TodoActionTypesEnum.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload
      }

    default:
      return state
  }
}
