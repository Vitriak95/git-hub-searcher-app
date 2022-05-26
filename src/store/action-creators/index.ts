import {ActionTypes} from '../action-types';

export const createPostAC = (post: any) => {
  return {
    type: ActionTypes.CREATE_POST,
    payload: post
  }
}
