import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { globals } from '../globals'

@Component({
  selector: 'app-programflight',
  templateUrl: './programflight.component.html',
  styleUrls: ['./programflight.component.css']
})
export class ProgramflightComponent implements OnInit {
navs:string[];
num: number[] = [];
// arr:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
images:any[];

  constructor(private dataservice:DataService, private g:globals) { }

  ngOnInit() {
  	this.dataservice.page2tabs().subscribe(x=> this.navs=x);
  	 

  //    if(this.g.selectedjob==''){
  //   this.g.selectedjob="Job-1";
  //   this.dataservice.assetsofjob("Job-1").subscribe(x=>this.assetslist = x['assets']);
  // }
  // else{
  // this.dataservice.assetsofjob(this.g.selectedjob).subscribe(x=> this.assetslist = x['assets']);
  // }
  // this.onclick(this.assetslist[0]);
  }
   onclick(asset:string){
    this.dataservice. loadpfimages(this.g.selectedjob,asset).subscribe(x=> this.images =x['images'] );
    for(var i=0;i<= this.images.length/4;i++){
      this.num.push(i);
    }
  }

}
