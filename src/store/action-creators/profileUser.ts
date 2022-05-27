import {ProfileUserActionTypes} from '../action-types/profileUserActionTypes';

export const fetchProfileUserAC = () => {
  return {
    type: ProfileUserActionTypes.FETCH_PROFILE_USER
  }
}
