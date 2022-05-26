export enum TodoActionTypesEnum {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
  SET_TODO_PAGE = 'SET_TODO_PAGE'
}

export interface FetchTodoAction {
  type: TodoActionTypesEnum.FETCH_TODOS;
}
export interface FetchTodoSuccessAction {
  type: TodoActionTypesEnum.FETCH_TODOS_SUCCESS;
  payload: any[]; // TODO add interface
}
export interface FetchTodoFailureAction {
  type: TodoActionTypesEnum.FETCH_TODOS_FAILURE;
  payload: string;
}
export interface SetTodoPageAction {
  type: TodoActionTypesEnum.SET_TODO_PAGE,
  payload: number;
}

export type TodoAction =
  FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoFailureAction
  | SetTodoPageAction;



export interface TodoStateInterface {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}
