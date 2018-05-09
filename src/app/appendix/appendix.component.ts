import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals } from '../globals';
@Component({
  selector: 'app-appendix',
  templateUrl: './appendix.component.html',
  styleUrls: ['./appendix.component.css']
})
export class AppendixComponent implements OnInit {

navs:string[];
  constructor(private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  	this.dataservice.page2tabs().subscribe(x=>this.navs = x);

  }

}
