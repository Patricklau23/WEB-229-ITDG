import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import all the pages componments for routings
import { HomeComponent } from './pages/home/home.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';

//set up pathing for routings -> go up to header (nav bar) href change the path e.g /home
const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'survey',component:SurveyListComponent},
{path:'login',component:LoginComponent},
{path:'signup',component: SignupComponent},
{path:'contact',component: ContactComponent},
{path: '', redirectTo: '/home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
