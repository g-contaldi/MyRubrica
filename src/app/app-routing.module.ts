import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddContactComponent} from "./add-contact/add-contact.component";
import {ListContactComponent} from "./list-contact/list-contact.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: ListContactComponent},
  {path: 'add/:id', component: AddContactComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
