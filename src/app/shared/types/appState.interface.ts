import {UsersStateInterface} from '../../users/types/usersState.interface';
import {UserProfileStateInterface} from '../../userProfile/types/userProfileState.interface';

export interface AppStateInterface {
  users: UsersStateInterface;
  userProfile: UserProfileStateInterface
}
