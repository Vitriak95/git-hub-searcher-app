import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsersPageComponent } from './components/users-page/users-page.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from './services/users.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {FetchUsersEffect} from './store/effects/fetchUsers.effect';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    RouterModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([FetchUsersEffect]),
    SharedModule
  ],
  declarations: [
    UsersPageComponent,
    UserComponent
  ],
  providers: [UsersService]
})

export class UsersModule {}
