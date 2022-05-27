import {combineReducers} from 'redux';
import {postsReducer, PostsReducerStateInterface} from './postsReducer';
import {usersReducer, UsersStateInterface} from './usersReducer';
import {profileUserReducer, ProfileUserStateInterface} from './profileUserReducer';

export interface GlobalStateInterface {
  users: UsersStateInterface;
  profileUser: ProfileUserStateInterface;
  posts: PostsReducerStateInterface;
}

export const rootReducer = combineReducers({
  users: usersReducer,
  profileUser: profileUserReducer,
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
