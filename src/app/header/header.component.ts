import { Component, OnInit, EventEmitter, Input,Output } from '@angular/core';
import { globals } from '../globals';
import { DataService } from '../data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	assetslist:string[];

  constructor(private g:globals,private dataservice:DataService) { }

  ngOnInit() {
  	if(this.g.selectedjob==''){
  	this.g.selectedjob="Job-1";
  	this.dataservice.assetsofjob("Job-1").subscribe(x=>this.assetslist = x['assets']);
  }
  else{
  this.dataservice.assetsofjob(this.g.selectedjob).subscribe(x=> this.assetslist = x['assets']);
	}
	if(this.g.selectedasset!=''){
  this.onassetclick(this.g.selectedasset);
  }
  else{
  this.onassetclick(this.assetslist[0]);

  }
  }

  @Output()
  onclick = new EventEmitter<any>();

  public onassetclick(x:string): any {
  	this.g.selectedasset = x;
    //console.log(data);
    this.onclick.emit(x);
  }

}
