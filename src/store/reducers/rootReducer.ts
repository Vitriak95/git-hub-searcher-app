import {combineReducers} from 'redux';
import {postsReducer, PostsReducerStateInterface} from './postsReducer';

export interface GlobalStateInterface {
  posts: PostsReducerStateInterface
}

export const rootReducer = combineReducers({
  posts: postsReducer
})
