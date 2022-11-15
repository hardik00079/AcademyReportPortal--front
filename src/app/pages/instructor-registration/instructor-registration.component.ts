import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-registration',
  templateUrl: './instructor-registration.component.html',
  styleUrls: ['./instructor-registration.component.css']
})
export class InstructorRegistrationComponent implements OnInit {

  firstName: String = "";
  lastName: String = "";
  email: String = "";
  username: string = "";
  password: String = "";

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  register() {


    this.httpClient.post("http://localhost:8080/api/instructors/add",
    {

      "firstName": this.firstName,
      "lastName": this.lastName,
      "email": this.email,
      "username": this.username,
      "password": this.password,
      "role": "Instructor"
    })
    .subscribe(response => {localStorage.setItem('logged_in_username', this.username);
    this.router.navigate(["/home"]);
    window.location.replace("/home");
  });


  }

}
