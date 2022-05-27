import {combineReducers} from 'redux';
import {postsReducer, PostsReducerStateInterface} from './postsReducer';
import {usersReducer, UsersStateInterface} from './usersReducer';

export interface GlobalStateInterface {
  users: UsersStateInterface;
  posts: PostsReducerStateInterface
}

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
