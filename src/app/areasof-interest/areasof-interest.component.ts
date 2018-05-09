import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { globals } from '../globals';
@Component({
  selector: 'app-areasof-interest',
  templateUrl: './areasof-interest.component.html',
  styleUrls: ['./areasof-interest.component.css']
})
export class AreasofInterestComponent implements OnInit {
	navs:string[];
	data:any[];


  //   images:any[] = [
  //           {'serial':1,'height':19.99,'path':'../../assets/BPCL_CCU_HA.png','content':'Expansion Joint Blanket Fallen Down, repair recommended'},
  //           {'serial':1,'height':20.23,'path':'../../assets/BPCL_CCU_HA2.png','content':'Expansion Joint Blanket Fallen Down, repair recommended'},
  //           {'serial':1,'height':20.23,'path':'../../assets/BPCL_CCU_HA2.png','content':'Expansion Joint Blanket Fallen Down, repair recommended'},
  //           {'serial':1,'height':21.97,'path':'../../assets/BPCL_CCU_HA3.png','content':'Expansion Joint Blanket Fallen Down, repair recommended'},
  //           {'serial':1,'height':25.98,'path':'../../assets/BPCL_CCU_HA4.png','content':'Expansion Joint Blanket Fallen Down, repair recommended'}
  //           ];
  // num:number[] =[0,1] ;

  constructor(private dataservice:DataService,private g:globals ) { }

  ngOnInit() {
  	this.dataservice.page2tabs().subscribe(x=>this.navs = x);
  }
   onclick(asset:string){
   // console.log("a");
      this.dataservice.aoi_data(this.g.selectedjob,asset).subscribe(x=>this.data=x['images']);
    }


}
