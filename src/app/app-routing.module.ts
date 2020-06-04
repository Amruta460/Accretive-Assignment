import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import {TasklistComponent} from './tasks/tasklist/tasklist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
