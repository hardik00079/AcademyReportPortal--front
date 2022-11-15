import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  username: string = "";
  password: string = "";
  showPassword: boolean = false;
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.httpClient.post("http://localhost:8080/api/users/loginValidation", {"username": this.username, "password": this.password})
    .subscribe(response => {
      localStorage.setItem('logged_in_username', this.username);
      this.router.navigate(["/home"]);
      window.location.replace("/home");
    });

    // window.location.reload();
  }
  showHidePassword() {
    this.showPassword = !this.showPassword;

  }

}
