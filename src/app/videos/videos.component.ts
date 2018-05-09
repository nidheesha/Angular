import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals} from '../globals';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
navs:string[]=[];
	data:any[];
  constructor(private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  	this.dataservice.page2tabs().subscribe(x=>this.navs = x);
  }

    onclick(asset:string){
  }

}
