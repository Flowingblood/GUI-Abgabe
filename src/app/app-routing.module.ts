import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './components/goals/goals.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { LoginGuard } from './guards/login.guard';
import { GoalsGuard } from './guards/goals.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
    data: { title: 'Anmeldung' },
  },
  {
    path: 'goals/:id',
    component: GoalsComponent,
    canActivate: [GoalsGuard],
    data: { title: 'Ziele Übersicht' },
  },
  {
    path: 'goals',
    redirectTo: '/login',
    data: { title: 'Ziele Übersicht' },
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AdminGuard],
    data: { title: 'Benutzer Übersicht' },
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
