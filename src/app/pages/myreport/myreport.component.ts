import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-myreport',
  templateUrl: './myreport.component.html',
  styleUrls: ['./myreport.component.css']
})
export class MyreportComponent implements OnInit {
  reportsurl;
  id: any;
  reports: any ={};

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) { 
    this.reportsurl = "http://localhost:8080/api/reports/id/";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');

    });
    this.httpClient.get(this.reportsurl+this.id).subscribe(data=>{
      console.log(data);
      this.reports=data;
    });
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
