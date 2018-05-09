import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EquipSpecsComponent } from './equip-specs/equip-specs.component';
import { ReportsComponent } from './reports/reports.component';
import { Glyph2Component } from './glyph2/glyph2.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { JobsComponent } from './jobs/jobs.component';
import { PiechartComponent } from './piechart/piechart.component';
import { TableComponent } from './table/table.component';
import { StackbarchartComponent } from './stackbarchart/stackbarchart.component';
import { ObservationsComponent } from './observations/observations.component';
import { ProgramflightComponent } from './programflight/programflight.component';
import { AreasofInterestComponent } from './areasof-interest/areasof-interest.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ThermalimagesComponent } from './thermalimages/thermalimages.component';
import { globals } from'./globals';
import { HeaderComponent } from './header/header.component';
import { VideosComponent } from './videos/videos.component';
import { ImageanalyticsComponent } from './imageanalytics/imageanalytics.component';
import { AppendixComponent } from './appendix/appendix.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Equipment Specifications', component:EquipSpecsComponent },
   { path: 'Reports of Jobs', component: ReportsComponent },
   { path: 'Jobs', component: JobsComponent }, 
   {path: 'detailedreport/:jobid', component: ObservationsComponent},
   { path: 'Observations', component: ObservationsComponent },
   { path: 'Program Flight', component: ProgramflightComponent },
   { path: 'Areas of Interests', component: AreasofInterestComponent },
   { path: 'Thermal Images', component: ThermalimagesComponent },
   { path: 'Videos', component: VideosComponent },
   { path: 'Image Analytics', component: ImageanalyticsComponent },
   { path: 'Appendix', component: AppendixComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
