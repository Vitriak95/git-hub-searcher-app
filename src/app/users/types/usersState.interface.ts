import {UserInterface} from '../../shared/types/user.interface';

export interface UsersStateInterface {
  data: UserInterface[] | null,
  loading: boolean,
  error: string | null
}
