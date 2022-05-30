import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UsersPageComponent } from './components/users-page/users-page.component';
import {UsersRoutingModule} from './users-routing.module';
import {UsersService} from './services/users.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {EffectsModule} from '@ngrx/effects';
import {FetchUsersEffect} from './store/effects/fetchUsers.effect';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', reducers),
    EffectsModule.forFeature([FetchUsersEffect])
  ],
  declarations: [
    UsersPageComponent
  ],
  providers: [UsersService]
})

export class UsersModule {}
