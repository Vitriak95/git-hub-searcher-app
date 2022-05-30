import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserInterface} from '../../shared/types/user.interface';

@Injectable()

export class UsersService {
  constructor(private http: HttpClient) {
  }

  fetchUsersData(): Observable<any> {
    const url = `${environment.apiUrl}/users?per_page=100`;
    return this.http.get<UserInterface[]>(url).pipe(
      map((response: UserInterface[]) => {
        return response
      })
    )
  }

}
