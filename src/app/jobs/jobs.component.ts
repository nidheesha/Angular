import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { tab } from '../tab';
import { globals } from '../globals'
import { ChartData } from '../chartdataclass' ;
//import { jobsassets } from '../jobsassets';
//import { jobstablecolumns } from '../jobstablecolumns';
//import { jobstabledata } from '../jobstabledata';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  navs:string[];
  data:any[];// = jobsassets;
  labels:string[];
  xtitle:string = "Assets Handled";
  ytitle:string = "Risks Detected "; 
	joblist:string[];
 	// chartlabels: Array<string>;
  // chartdata: number[];

  titleofjob:string;
  // x:try;
  // x.update("hi");
  // x.print();
  // col:Array<any>;//=jobstablecolumns;
  // datajobs:Array<any>;//=jobstabledata;
  constructor(private dataservice:DataService, private g:globals) { }

  ngOnInit() {
   
    this.dataservice.page1tabs().subscribe(x=>this.navs = x);
  	this.service();
  	// this.chartlabels=null;
  	// this.col = null;
    //x = "mine";
   //  this.datajobs = null;
   this.g.selectedasset='';
   if(this.g.selectedjob==''){
    this.onclick(this.joblist[0]);}
    else{
      this.onclick(this.g.selectedjob)
    }
  }
  service():void{

  	this.dataservice.service2().subscribe(joblist => this.joblist=joblist);
  	
  }

  onclick(x:string):void{
    this.g.selectedjob = x;
    this.titleofjob = x;
    this.dataservice.stackbarservice(x).subscribe(y => {this.data = y['data'];this.labels = y['labels'];} );//a => {this.data = a['data'];console.log(a['data']);})
    // console.log(x);
  //   this.dataservice.jobstableservice(x.Title).subscribe(a => {this.col = a['Columns'];
  //   this.datajobs = a['Data'];});
 	// this.dataservice.chartservice(x.Title).subscribe(data => {this.chartlabels = data['Labels'];
 	// 	this.chartdata = data['Data'];}); 
}

}