import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-manager-home',
  templateUrl: './account-manager-home.component.html',
  styleUrls: ['./account-manager-home.component.css']
})
export class AccountManagerHomeComponent implements OnInit {

  user: any;
  loggedIn: boolean = false;
  username: any;
  trainees: any;
  instructors: any;
  id: any;
  aId: any;

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { }

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
    });
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');

    });
   
    
    this.httpClient.get('http://localhost:8080/api/instructors/').subscribe(data=>{
      console.log(data);
      this.instructors = data;
    });
    
  }
  assign(){
    
    this.httpClient.post('http://localhost:8080/api/trainees/requestReportTraineeforbyAM',
    {
      "Instid": this.aId,
      "traineeUserid": this.id
    })
    .subscribe();
    
    
    //this.router.navigateByUrl("/tickets");
    window.location.reload();
    
  }
}
