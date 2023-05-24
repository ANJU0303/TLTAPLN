import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: UserListComponent },
  { path: 'details', component: UserdetailsComponent },
  { path: 'details/:id', component: UserdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
