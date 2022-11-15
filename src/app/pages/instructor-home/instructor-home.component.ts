import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styleUrls: ['./instructor-home.component.css']
})
export class InstructorHomeComponent implements OnInit {
  user: any;
  loggedIn: boolean = false;
  username: any;
  trainees: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('logged_in_username')) {
      this.loggedIn = true;
      this.username = localStorage.getItem('logged_in_username');
    }
    var url = "http://localhost:8080/api/users/username/" + this.username;
    this.httpClient.get(url).subscribe(data => (this.user = data));

    console.log(this.user);

    this.httpClient.get('http://localhost:8080/api/trainees/').subscribe(data=>{
      this.trainees = data;
      
    console.log(this.trainees);
    })
    
  }
}
