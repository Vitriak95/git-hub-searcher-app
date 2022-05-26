import {ActionTypes} from '../action-types';
import {PostInterface} from '../../common/types';

export interface PostsReducerStateInterface {
  posts: Array<PostInterface>,
  fetchedPosts: Array<PostInterface>
}
const initialState: PostsReducerStateInterface = {
  posts: [],
  fetchedPosts: []
}
export const postsReducer = (state: PostsReducerStateInterface = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CREATE_POST:
      // return {...state, posts: state.posts.concat(action.payload)}
      return {
        ...state,
        posts: [...state.posts, action.payload]}

    default: return state
  }
}
