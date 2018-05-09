import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
navs:string[];
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  	this.dataservice.page1tabs().subscribe(x => this.navs = x);
  }
   onclick(asset:string){
  	//this.g.selectedasset = y;
  	//this.dataservice.observations_col_service().subscribe(x => this.col =x);
  	//this.dataservice.observations_data_service(this.g.selectedjob,asset).subscribe(x => this.data =x['tabledata']);
  }


}
