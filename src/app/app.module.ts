import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LoginComponent } from './components/login/login.component';
import { GoalsComponent } from './components/goals/goals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoalEditDialogComponent } from './components/goal-edit-dialog/goal-edit-dialog.component';
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { GoalAddDialogComponent } from './components/goal-add-dialog/goal-add-dialog.component';
import { GoalDeleteDialogComponent } from './components/goal-delete-dialog/goal-delete-dialog.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UsersComponent } from './components/users/users.component';
import { UserAddDialogComponent } from './components/user-add-dialog/user-add-dialog.component';
import { UserDeleteDialogComponent } from './components/user-delete-dialog/user-delete-dialog.component';
import { PasswordEditDialogComponent } from './components/password-edit-dialog/password-edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GoalsComponent,
    GoalEditDialogComponent,
    UserEditDialogComponent,
    GoalAddDialogComponent,
    GoalDeleteDialogComponent,
    NavBarComponent,
    UsersComponent,
    UserAddDialogComponent,
    UserDeleteDialogComponent,
    PasswordEditDialogComponent,
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
