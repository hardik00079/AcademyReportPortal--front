import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountmanagerRegistrationComponent } from './pages/accountmanager-registration/accountmanager-registration.component';
import { GenerateReportComponent } from './pages/generate-report/generate-report.component';
import { HomeComponent } from './pages/home/home.component';
import { InstructorRegistrationComponent } from './pages/instructor-registration/instructor-registration.component';
import { LoginComponent } from './pages/login/login.component';
import { MyreportComponent } from './pages/myreport/myreport.component';
import { RegisterComponent } from './pages/register/register.component';
import { TraineeRegistrationComponent } from './pages/trainee-registration/trainee-registration.component';

const routes: Routes = [
  {path: 'register',component: RegisterComponent},
  {path: 'home',component: HomeComponent},
  {path: 'AccountmanagerRegistration',component: AccountmanagerRegistrationComponent},
  {path: 'TraineeRegistration',component: TraineeRegistrationComponent},
  {path: 'InstructorRegistration',component: InstructorRegistrationComponent},
  {path: 'login',component: LoginComponent},
  {path:"trainees/id/:id", component: GenerateReportComponent},
  {path:"reports/id/:id", component: MyreportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
