import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// App routing module
import { AppRoutingModule } from './app-routing.module';

// NGRX State managemant imports
import { AppStoreModule } from './app-store/app-store.module';

// App modules
import { BeerModule } from './pages/beer/beer.module';
import { HomeModule } from './pages/home/home.module';

// App components
import { AppComponent } from './app.component';
import { CartoonModule } from './pages/cartoon/cartoon.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    AuthModule,
    BeerModule,
    HomeModule,
    CartoonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
