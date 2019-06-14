import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// NGRX State managemant modules
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

// NGRX State managemant imports
import { AppStoreModule } from './app-store/app-store.module';
import { appReducers } from './app-store/reducers/app.reducer';

// App modules
import { BeerModule } from './pages/beer/beer.module';
import { UserModule } from './pages/user/user.module';

// App components
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    BeerModule,
    UserModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
