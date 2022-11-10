import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import all the pages componments for routings
import { HomeComponent } from './pages/home/home.component';
import { SurveyListComponent } from './pages/survey-list/survey-list.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivesurveyComponent } from './pages/activesurvey/activesurvey.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { TemplateComponent } from './pages/template/template.component';

//set up pathing for routings -> go up to header (nav bar) href change the path e.g /home
const routes: Routes = [
{path:'home',component:HomeComponent, data: {title:'ONLINE SURVEY'}},
{path:'surveylist',component:SurveyListComponent, data: {title:'Survey Templates'}},
{path:'login',component:LoginComponent,data: {title: 'Log in'}},
{path:'signup',component: SignupComponent,data: {title: 'Register'}},
{path:'contact',component: ContactComponent,data: {title: 'Contact Us'}},
{path:'activesurvey',component: ActivesurveyComponent},
{path:'confirmpage', component: ConfirmComponent, data: {title: 'Your New Survey Is Ready!!'}},
{path:'template',component:TemplateComponent,data:{title:'Create a new Survey'}},
{path: '', redirectTo: '/home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
