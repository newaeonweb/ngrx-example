import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';

import { UsersComponent as UsersContainerComponent } from './pages/users/user-list/users.component';
import { UsersComponent } from './pages/users/components/user-list-component/user-list.component';
import { UserComponent } from './pages/users/user-detail/user.component';
import { UserDetailsComponent } from './pages/users/components/user-details-component/user-details.component';
import { BeerModule } from './pages/beer/beer.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BeerModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
