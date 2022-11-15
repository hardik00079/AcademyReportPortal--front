import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  loggedIn: Boolean = false;

 // fdmLogo: String =  '../assets/images/logo.png';
  // logoAlt: String = 'fdm'
  username: any;
  user: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('logged_in_username')){
      this.loggedIn = true;
      this.username = localStorage.getItem('logged_in_username');
    }
    var url = "http://localhost:8080/api/users/username/" + this.username;
    this.httpClient.get(url).subscribe(data => (this.user = data));

    console.log(this.user);
    
  }

  logout() {
    localStorage.removeItem('logged_in_username');
    
    window.location.replace("/home");
    
  }

}
