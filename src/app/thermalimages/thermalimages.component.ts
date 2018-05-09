import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals} from '../globals';
@Component({
  selector: 'app-thermalimages',
  templateUrl: './thermalimages.component.html',
  styleUrls: ['./thermalimages.component.css']
})
export class ThermalimagesComponent implements OnInit {
	navs:string[]=[];
	data:any[];

  constructor(private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  	this.dataservice.page2tabs().subscribe(x=>this.navs = x);
  	
  }
  onclick(asset:string){
  	this.dataservice.thermalimagesdata(this.g.selectedjob,asset).subscribe(x=>this.data=x['images']);
  console.log(this.data);
  }
}
