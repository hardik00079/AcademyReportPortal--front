import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountmanagerRegistrationComponent } from './pages/accountmanager-registration/accountmanager-registration.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TraineeRegistrationComponent } from './pages/trainee-registration/trainee-registration.component';
import { InstructorRegistrationComponent } from './pages/instructor-registration/instructor-registration.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TraineeHomeComponent } from './pages/trainee-home/trainee-home.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { InstructorHomeComponent } from './pages/instructor-home/instructor-home.component';
import { GenerateReportComponent } from './pages/generate-report/generate-report.component';
import { CommonModule } from '@angular/common';
import { AccountManagerHomeComponent } from './pages/account-manager-home/account-manager-home.component';
import { MyreportComponent } from './pages/myreport/myreport.component';
import { FdmEmailDirective } from './fdm-email.directive';
import { PasswordDirective } from './password.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegisterComponent,
    AccountmanagerRegistrationComponent,
    HomeComponent,
    TraineeRegistrationComponent,
    InstructorRegistrationComponent,
    TraineeHomeComponent,
    LoginComponent,
    FooterComponent,
    InstructorHomeComponent,
    GenerateReportComponent,
    AccountManagerHomeComponent,
    MyreportComponent,
    FdmEmailDirective,
    PasswordDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule, 
    MatOptionModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
