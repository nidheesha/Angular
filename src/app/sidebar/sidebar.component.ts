import { Component, OnInit } from '@angular/core';
import { tab } from '../tab'
import { DataService } from '../data.service'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  navtabs:tab[];
  //jobs: tab[];
  
  constructor(private dataserivce : DataService) { }

  ngOnInit() {
  	this.service();
    //this.jobs = ['job1','job2'];
  }
  service(): void{
  	this.dataserivce.service1().subscribe(navtabs => this.navtabs=navtabs);
    ///this.dataserivce.service2().subscribe(jobs => this.jobs = jobs);
  }

closeNav():void {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "1%";
    document.getElementById("data").style.marginLeft= "1%";
}


}

