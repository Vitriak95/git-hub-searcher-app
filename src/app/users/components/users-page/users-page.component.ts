import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {fetchUsersAction} from '../../store/actions/fetchUsers.action';
import {Observable} from 'rxjs';
import {isLoadingUsersSelector, usersDataSelector} from '../../store/selectors';
import {UserInterface} from '../../../shared/types/user.interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  isLoading$: Observable<boolean> | undefined;
  usersData$: Observable<UserInterface[]> | undefined;


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fetchUsersData();
    this.initializeListeners();
  }

  // get Users
  fetchUsersData(): void {
    this.store.dispatch(fetchUsersAction());
  }

  // selectors
  initializeListeners(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingUsersSelector));
    // @ts-ignore

    this.usersData$ = this.store.pipe(select(usersDataSelector));
    // console.log('sdrfg', this.usersData$)
  }
}
