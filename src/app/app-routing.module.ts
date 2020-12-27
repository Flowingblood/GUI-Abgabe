import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { LoginComponent } from './components/login/login.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent,  data: {title: 'Anmeldung'}},
  {path: 'goals', component: GoalsComponent,  data: {title: 'Ziele Übersicht'}},
  {path: 'users', component: UserOverviewComponent,  data: {title: 'Benutzer Übersicht'}},

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
