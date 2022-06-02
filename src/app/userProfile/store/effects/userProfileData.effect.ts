import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserProfileService} from '../../services/userProfile.service';
import {
  fetchUserProfileDataAction,
  fetchUserProfileDataFailureAction,
  fetchUserProfileDataSuccessAction
} from '../actions/userProfileData.action';
import {catchError, map, of, switchMap} from 'rxjs';

@Injectable()

export class UserProfileDataEffect {
  constructor(private actions$: Actions, private userProfileService: UserProfileService) {
  }

  fetchUserProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUserProfileDataAction),
      switchMap(({username}) => {
        return this.userProfileService.fetchUserProfileData(username).pipe(
          map((userData: any) => {
            return fetchUserProfileDataSuccessAction({userData})
          }),
          catchError(() => {
            return of(fetchUserProfileDataFailureAction)
          })
        )
      })
    )
  })
}
