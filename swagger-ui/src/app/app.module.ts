import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalUserComponent } from './internal-user/internal-user.component';
import { ExternalUserComponent } from './external-user/external-user.component';

@NgModule({
  declarations: [
    AppComponent,
    InternalUserComponent,
    ExternalUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
