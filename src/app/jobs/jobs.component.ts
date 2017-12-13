import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { tab } from '../tab';
import { ChartData } from '../chartdataclass' ;
//import { jobstablecolumns } from '../jobstablecolumns';
//import { jobstabledata } from '../jobstabledata';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
	joblist:tab[];
 	chartlabels: Array<string>;
  chartdata: number[];
  titleofjob:string;
  col:Array<any>;//=jobstablecolumns;
  datajobs:Array<any>;//=jobstabledata;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  	this.service();
  	this.chartdata=null;
  	this.chartlabels=null;
  	this.col = null;
    this.datajobs = null;
    this.onclick(this.joblist[0]);
  }
  service():void{
  	this.dataservice.service2().subscribe(joblist => this.joblist=joblist);
  	
  }

  onclick(x:tab):void{
    this.titleofjob = x.Title;
    console.log(x);
    this.dataservice.jobstableservice(x.Title).subscribe(a => {this.col = a['Columns'];
    this.datajobs = a['Data'];});
 	this.dataservice.chartservice(x.Title).subscribe(data => {this.chartlabels = data['Labels'];
 		this.chartdata = data['Data'];}); 
}
  
  

}