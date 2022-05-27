import * as UsersActionCreators from './users';
import * as PostsActionCreators from './post';

export const actionCreators = {
  ...UsersActionCreators,
  ...PostsActionCreators
}
