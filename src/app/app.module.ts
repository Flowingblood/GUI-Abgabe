import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { GoalsComponent } from './components/goals/goals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoalEditDialogComponent } from './components/goal-edit-dialog/goal-edit-dialog.component';
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { PasswordEditDialogComponent } from './components/password-edit-dialog/password-edit-dialog.component';
import { GoalAddDialogComponent } from './components/goal-add-dialog/goal-add-dialog.component';
import { GoalDeleteDialogComponent } from './components/goal-delete-dialog/goal-delete-dialog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LoginComponent,
    GoalsComponent,
    GoalEditDialogComponent,
    UserEditDialogComponent,
    PasswordEditDialogComponent,
    GoalAddDialogComponent,
    GoalDeleteDialogComponent,
    NavBarComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
