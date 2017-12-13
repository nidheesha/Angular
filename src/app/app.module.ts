import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Ng2TableModule } from 'ng2-table/ng2-table';



import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataService } from './data.service';
//import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { EquipSpecsComponent } from './equip-specs/equip-specs.component';
import { ReportsComponent } from './reports/reports.component';
import { Glyph2Component } from './glyph2/glyph2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { JobsComponent } from './jobs/jobs.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    EquipSpecsComponent,
    ReportsComponent,
    Glyph2Component,
    DropdownComponent,
    JobsComponent,
    PiechartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    Ng2TableModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '\home', component: HomeComponent },
  { path: '\EquipmentSpecification', component:EquipSpecsComponent },
   { path: '\Report', component: ReportsComponent },
   { path: '\Jobs', component: JobsComponent }

      ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
