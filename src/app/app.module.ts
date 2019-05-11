import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

export const someToken = new InjectionToken<string>('some toke');

const possibleRouting = environment.production ? AppRoutingModule : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    possibleRouting
  ],
  providers: [
    {
      provide: someToken,
      useValue: environment.production ? environment.URL : '',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
