import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {fetchUserProfileDataAction} from '../../store/actions/userProfileData.action';
import {Observable, Subscription} from 'rxjs';
import {UserProfileDataInterface} from '../../../shared/types/userProfileData.interface';
import {isErrorUserProfileSelector, isLoadingUserProfileSelector, userProfileDataSelector} from '../../store/selectors';
import {UtilsService} from '../../../shared/services/utils.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  isLoading$: Observable<boolean>;
  isError$: Observable<string | null>;

  userProfileDataSubscription$: Subscription;
  userProfileData: UserProfileDataInterface | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    public utilsService: UtilsService
  ) { }

  userNameParams: string;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();

    console.log('this.userNameParams', this.userNameParams);

    if (this.userNameParams) {
      this.fetchUserProfileData(this.userNameParams);
    }

    console.log('this.userProfileData', this.userProfileData)
  }

  ngOnDestroy() {
    this.userProfileDataSubscription$.unsubscribe();
  }

  initializeValues(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.userNameParams = params['username']
    });
  }

  initializeListeners(): void {
    // @ts-ignore
    this.isLoading$ = this.store.pipe(select(isLoadingUserProfileSelector));
    // @ts-ignore
    this.isError$ = this.store.pipe(select(isErrorUserProfileSelector));
    // @ts-ignore
    this.userProfileDataSubscription$ = this.store.pipe(select(userProfileDataSelector)).subscribe((data) => {
      console.log('datadatadatadata', data)
      this.userProfileData = data;
    });

    console.log('this.userProfileData', this.userProfileData)
  }

  fetchUserProfileData(username: string): void {
    this.store.dispatch(fetchUserProfileDataAction({username}));
  }
}
