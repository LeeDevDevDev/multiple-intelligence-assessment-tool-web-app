import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import {
  AngularFireAuthGuard,
  canActivate,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';
import { GamesComponent } from './components/main/games/games.component';
import { StudentsComponent } from './components/main/students/students.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'home',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'students', pathMatch: 'full' },
      { path: 'games', component: GamesComponent },
      { path: 'students', component: StudentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
