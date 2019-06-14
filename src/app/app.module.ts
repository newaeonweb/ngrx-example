import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from './app-store/reducers/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { ConfigEffects } from './pages/user/_user-store/config.effects';
import { UserEffects } from './pages/user/_user-store/user.effects';

import { AppComponent } from './app.component';
import { UserService } from './pages/user/services/user.service';

import { BeerModule } from './pages/beer/beer.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BeerModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    UserModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
