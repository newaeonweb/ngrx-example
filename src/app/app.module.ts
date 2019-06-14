import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// App routing module
import { AppRoutingModule } from './app-routing.module';

// NGRX State managemant imports
import { AppStoreModule } from './app-store/app-store.module';

// App modules
import { BeerModule } from './pages/beer/beer.module';
import { UserModule } from './pages/user/user.module';

// App components
import { AppComponent } from './app.component';

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
