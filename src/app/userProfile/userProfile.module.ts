import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {UserProfileRoutingModule} from './userProfile-routing.module';
import {UserProfileService} from './services/userProfile.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserProfileDataEffect} from './store/effects/userProfileData.effect';

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    StoreModule.forFeature('userProfile', reducers),
    EffectsModule.forFeature([UserProfileDataEffect])
  ],
  declarations: [
    UserProfileComponent
  ],
  providers: [UserProfileService]
})

export class UserProfileModule {}
