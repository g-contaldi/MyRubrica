import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {ContactService} from "./providers/contact.service";
import {ListContactComponent} from './list-contact/list-contact.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ListContactComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    AppRoutingModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
