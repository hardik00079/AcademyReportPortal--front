import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {
  id: any;
  instructors: any ={};
  trainees: any = {};
  traineesurl;
  Instructorsurl;
  reporturl;
  reportsurl;
  name: string = "";
  description: string = "";
  date: Date = new Date();
  loggedIn: boolean = false;
  username: any;
  user: any;
  reports: any;
  aId: any;
  visable: boolean = false;
;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router : Router) {
    
    this.traineesurl = "http://localhost:8080/api/trainees/id/";
    this.Instructorsurl ="http://localhost:8080/api/instructors/"; 
    this.reporturl = "http://localhost:8080/api/reports/addreport/";
    this.reportsurl = "http://localhost:8080/api/reports/id/"
   }

  ngOnInit(): void {
    if (localStorage.getItem('logged_in_username')) {
      this.loggedIn = true;
      this.username = localStorage.getItem('logged_in_username');
    }
    var url = "http://localhost:8080/api/users/username/" + this.username;
    this.httpClient.get(url).subscribe(data => (this.user = data));

    console.log(this.user);

    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');

    });
    this.httpClient.get(this.traineesurl+this.id).subscribe(data=>{
      console.log(data);
      this.trainees=data;
    });
    this.httpClient.get(this.Instructorsurl).subscribe(data=>{
      console.log(data);
      this.instructors = data;
      this.aId = this.instructors.assignee.email;

    });
    this.httpClient.get(this.reportsurl+this.id).subscribe(data=>{
      console.log(data);
      this.reports=data;
    });
  }
  assign(){
    
    this.httpClient.post('http://localhost:8080/api/trainees/requestReportTraineeforbyAM',
    {
      "traineeUserid": this.id,
      "Instid": this.aId
    })
    .subscribe();
    
    this.router.navigateByUrl("/home");
    //window.location.reload();
    
  }
  generate() {
    this.httpClient.post(this.reporturl+this.id+"/"+this.user.userId,
    {
      "name": this.name,
      "description": this.description,
      "dateCreated": this.date,
      "visable": this.visable
    }).subscribe(response => this.router.navigate(["/home"]));

    // window.location.reload();
  }
  delete(id: String, name: string) {
    if(confirm("Are you sure you want to delete " + name )) {
      var url = "http://localhost:8080/api/reports/delete/" + id;
      this.httpClient.delete(url).subscribe(data => window.location.reload())
    }
  }

  visablereport(){
    {
      this.visable = !this.visable;
  
    }
  }


  @ViewChild('reportPdf',{static:false}) el!: ElementRef
  title = 'pdfapp';

generatePDF(){
    let pdf = new jsPDF('p', 'pt','a4',true);
    pdf.setFontSize(10);
    // No difference
    pdf.setDisplayMode("fullwidth", "continuous","FullScreen");
 
    pdf.html(this.el.nativeElement,{
      html2canvas: {
        scale: 0.7 // default is window.devicePixelRatio
    },
      autoPaging: true,
    width: 200,
    margin: 0,
    x: 0,
    y: 0,
      callback:(pdf) => {
        pdf.save("output.pdf")
      }
    })
  }
}


 


