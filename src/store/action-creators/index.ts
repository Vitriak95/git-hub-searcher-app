import * as UsersActionCreators from './users';
import * as PostsActionCreators from './post';
import * as ProfileUserActionCreators from './profileUser';
import * as UserRepositoriesActionCreators from './userRepositories';

export const actionCreators = {
  ...UsersActionCreators,
  ...ProfileUserActionCreators,
  ...UserRepositoriesActionCreators,
  ...PostsActionCreators
}
