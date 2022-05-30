import {Injectable} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {fetchUsersAction, fetchUsersFailureAction, fetchUsersSuccessAction} from '../actions/fetchUsers.action';
import {catchError, map, of, switchMap} from 'rxjs';
import {UserInterface} from '../../../shared/types/user.interface';

@Injectable()

export class FetchUsersEffect {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {
  }

  fetchUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchUsersAction),
      switchMap(() => {
        return this.usersService.fetchUsersData().pipe(
          map((users: UserInterface[]) => {
            return fetchUsersSuccessAction({users})
          }),
          catchError(() => {
            return of(fetchUsersFailureAction())
          })
        )
      })
    )
  })
}
