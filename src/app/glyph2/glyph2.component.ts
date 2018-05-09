import { Component, OnInit } from '@angular/core';
import { globals } from '../globals';
@Component({
  selector: 'app-glyph2',
  templateUrl: './glyph2.component.html',
  styleUrls: ['./glyph2.component.css']
})
export class Glyph2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav():void {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.getElementById("data").style.marginLeft = "200px";
    document.getElementById("data").style.width= "83vw";

}

}
