import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trainee-home',
  templateUrl: './trainee-home.component.html',
  styleUrls: ['./trainee-home.component.css']
})
export class TraineeHomeComponent implements OnInit {
  user: any;
  loggedIn: boolean = false;
  username: any;
  reports: any;
  id: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { 
   
  }

  ngOnInit(): void {
    if (localStorage.getItem('logged_in_username')) {
      this.loggedIn = true;
      this.username = localStorage.getItem('logged_in_username');
    }
    var url = "http://localhost:8080/api/users/username/" + this.username;
    this.httpClient.get(url).subscribe(data => (this.user = data));
     
    console.log(this.user);
   
    
  }
  
  

}
