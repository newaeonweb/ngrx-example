import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// App routing module
import { AppRoutingModule } from './app-routing.module';

// NGRX State managemant imports
import { AppStoreModule } from './app-store/app-store.module';

// App modules
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';
import { CartoonModule } from './pages/cartoon/cartoon.module';

// App components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppStoreModule,
    AuthModule,
    HomeModule,
    CartoonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
