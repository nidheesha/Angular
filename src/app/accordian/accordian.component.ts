import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {
num:any[]=[];

@Input()
id:string;
@Input()
images:any[];
@Input()
header:string="";
@Input()
footer:string="";
// @Input()
// data:any[];




  constructor() { }

  ngOnInit() {

  // 	for(var i=0;i<= this.data[0]['images'].length/4;i++){
  // 		this.num.push(i);
  // 	}
  	for(var i=0;i<= this.images.length/4;i++){
  		this.num.push(i);
  	}
  }
  viewer():void{
  	console.log("aa");
  	 document.getElementById("viewer").style.display = "block";}



}
