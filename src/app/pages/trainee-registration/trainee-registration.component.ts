import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainee-registration',
  templateUrl: './trainee-registration.component.html',
  styleUrls: ['./trainee-registration.component.css']
})
export class TraineeRegistrationComponent implements OnInit {

  firstName: String = "";
  lastName: String = "";
  email: String = "";
  username: string = "";
  password: String = "";
 

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register() {


    this.httpClient.post("http://localhost:8080/api/trainees/add",
    {

      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "username": this.username,
      "password": this.password,
      "role": "Trainee"
    })
    .subscribe(response => {localStorage.setItem('logged_in_username', this.username);
    this.router.navigate(["/home"]);
    window.location.replace("/home");
  });


  }
}
