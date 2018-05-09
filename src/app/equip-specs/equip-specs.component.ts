import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
@Component({
  selector: 'app-equip-specs',
  templateUrl: './equip-specs.component.html',
  styleUrls: ['./equip-specs.component.css']
})
export class EquipSpecsComponent implements OnInit {
  navs:string[];
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  	this.dataservice.page1tabs().subscribe(x => this.navs = x);
  }

}
