import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map, Observable} from 'rxjs';
import {UserProfileDataInterface} from '../../shared/types/userProfileData.interface';

@Injectable()

export class UserProfileService {
  constructor(private http: HttpClient) {
  }

  fetchUserProfileData(userName: string): Observable<UserProfileDataInterface> {
    const url = `${environment.apiUrl}/users/${userName}`;

    return this.http.get<UserProfileDataInterface>(url).pipe(
      map((response) => {
        console.log('response', response)
        return response
      })
    )
  }
}
