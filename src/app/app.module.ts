import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomLibAModule } from './custom-lib-a.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomLibAModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
