import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-accountmanager-registration',
  templateUrl: './accountmanager-registration.component.html',
  styleUrls: ['./accountmanager-registration.component.css']
})
export class AccountmanagerRegistrationComponent implements OnInit {

  firstName: String = "";
  lastName: String = "";
  email: String = "";
  username: string = "";
  password: String = "";

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register() {


    this.httpClient.post("http://localhost:8080/api/accountmanager/add",
    {

      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "username": this.username,
      "password": this.password,
      "role": "Account Manager"
    })
    .subscribe(response => {localStorage.setItem('logged_in_username', this.username);
    this.router.navigate(["/home"]);
    window.location.replace("/home");
  });


  }

}
