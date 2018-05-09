import { Component, OnInit, Input } from '@angular/core';
//import{ tab } from '../tab'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  values :String[] ;
  @Input()
  Title : String ;

  constructor() { }

  ngOnInit() {
  	//console.log(this.Title,this.values);
 }
 onclick(x):void{
 	console.log(x);
 }


}
