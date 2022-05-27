import {combineReducers} from 'redux';
import {postsReducer, PostsReducerStateInterface} from './postsReducer';
import {usersReducer, UsersStateInterface} from './usersReducer';
import {profileUserReducer, ProfileUserStateInterface} from './profileUserReducer';
import {userRepositoriesReducer, UserRepositoriesStateInterface} from './userRepositoriesReducer';

export interface GlobalStateInterface {
  users: UsersStateInterface;
  profileUser: ProfileUserStateInterface;
  userRepositories: UserRepositoriesStateInterface;
  posts: PostsReducerStateInterface;
}

export const rootReducer = combineReducers({
  users: usersReducer,
  profileUser: profileUserReducer,
  userRepositories: userRepositoriesReducer,
  posts: postsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
