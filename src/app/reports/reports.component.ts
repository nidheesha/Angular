import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import  { ReportTableData } from '../ReportTableData';
// import {  Reportcolumns } from '../Reportcolumns';
 import { Reportpaths } from '../reportpaths';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
	col:Array<any>;// = Reportcolumns;
	data:Array<any>;// = ReportTableData;
  path:Array<any> = Reportpaths;

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.reportcolumnservice().subscribe(x => this.col = x);
    this.dataservice.reportdataservice().subscribe(x => this.data = x);
  }
    y:Array<any>;
    onclick(x:Array<any>){
      //console.log(x['row']);
      if(x['column']=="report"){
        this.y = x['row'];
        for(let i=0;i<this.path.length;i++){
        //  console.log(this.path[0]['serial'];
          if(this.path[i]['serial']===this.y['serial']){
            //console.log(this.y['serial']);
           window.open(this.path[i]['report-link']);
          }
        }
      }
    }

}
