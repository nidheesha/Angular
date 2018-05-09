import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals } from '../globals'
//import { highrisk, lowrisk, mediumrisk } from '../observationstabledata';
@Component({
  selector: 'app-observations',
  templateUrl: './observations.component.html',
  styleUrls: ['./observations.component.css']
})
export class ObservationsComponent implements OnInit {
navs:string[]
assetslist:string[]=[];
col:any[];
data:any[];

  constructor( private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  this.dataservice.page2tabs().subscribe(x=>this.navs = x);
 //  if(this.g.selectedjob==''){
 //  	this.g.selectedjob="Job-1";
 //  	this.dataservice.assetsofjob("Job-1").subscribe(x=>this.assetslist = x['assets']);
 //  }
 //  else{
 //  this.dataservice.assetsofjob(this.g.selectedjob).subscribe(x=> this.assetslist = x['assets']);
	// }
 //  this.onclick(this.assetslist[0]);
  }

  onclick(asset:string){
  	//this.g.selectedasset = y;
  	this.dataservice.observations_col_service().subscribe(x => this.col =x);
  	this.dataservice.observations_data_service(this.g.selectedjob,asset).subscribe(x => this.data =x['tabledata']);
  }

}
