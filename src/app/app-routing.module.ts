import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // {
  //   path: 'login',
  //   children: [
  //     { path: '', component: WelcomeMsgComponent, outlet: 'message' },
  //     { path: '', component: LoginComponent, outlet: 'login' },
  //   ],
  // },
  // {
  //   path: 'signup',
  //   children: [
  //     { path: '', component: WelcomeMsgComponent, outlet: 'message' },
  //     { path: '', component: RegisterComponent, outlet: 'login' },
  //   ],
  // },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'timeline', component: TimelineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
