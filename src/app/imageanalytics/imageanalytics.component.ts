import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals } from '../globals'
@Component({
  selector: 'app-imageanalytics',
  templateUrl: './imageanalytics.component.html',
  styleUrls: ['./imageanalytics.component.css']
})
export class ImageanalyticsComponent implements OnInit {
navs:string[];
  constructor( private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  this.dataservice.page2tabs().subscribe(x=>this.navs = x);
  	
  }
    onclick(asset:string){
  
  }

}
