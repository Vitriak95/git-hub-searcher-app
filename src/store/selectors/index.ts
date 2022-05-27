import {RootState} from '../reducers/rootReducer';

export const getAllUsers = (state: RootState) => state.users;
export const getProfileUserData = (state: RootState) => state.profileUser;
export const getUserRepositories = (state: RootState) => state.userRepositories;
