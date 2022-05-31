import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {fetchUsersAction} from '../../store/actions/fetchUsers.action';
import {Observable, Subscription} from 'rxjs';
import {isErrorUsersSelector, isLoadingUsersSelector, usersDataSelector} from '../../store/selectors';
import {UserInterface} from '../../../shared/types/user.interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean> | undefined;
  error$: Observable<string | null>;
  // usersData$: Observable<UserInterface[]> | undefined;

  usersDataSubscription$: Subscription;
  usersData: UserInterface[] | null = [];

  searchTerm: string = '';


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fetchUsersData();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.usersDataSubscription$.unsubscribe();
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
    this.error$ = this.store.pipe(select(isErrorUsersSelector));

    // this.usersData$ = this.store.pipe(select(usersDataSelector));
    // console.log('sdrfg', this.usersData$)

    // @ts-ignore
    this.usersDataSubscription$ = this.store.pipe(select(usersDataSelector)).subscribe((users) => {
      this.usersData = users;
    });
    console.log('this.users', this.usersData);
  }

  onChangeSearchInput(searchTerm: string) {
    console.log('searchTerm', searchTerm);
    this.searchTerm = searchTerm;
  }

  filterUsers(users: UserInterface[] | null) {
    if (!users?.length) {
      return []
    }

    return users.filter((user) => user.login.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
