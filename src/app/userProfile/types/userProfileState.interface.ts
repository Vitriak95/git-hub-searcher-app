import {UserProfileDataInterface} from '../../shared/types/userProfileData.interface';

export interface UserProfileStateInterface {
  data: UserProfileDataInterface | null,
  loading: boolean,
  error: string | null
}
