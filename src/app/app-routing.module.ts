import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'account/:userId', component: AccountComponent }
  // Add more routes as needed
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
