import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGalleryModule } from 'ngx-gallery';



import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataService } from './data.service';
// import { AppRoutingModule } from './/app-routing.module';
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
import { ViewerComponent } from './viewer/viewer.component';

import 'hammerjs';

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
    TableComponent,
    StackbarchartComponent,
    ObservationsComponent,
    ProgramflightComponent,
    AreasofInterestComponent,
    AccordianComponent,
    ThermalimagesComponent,
    HeaderComponent,
    VideosComponent,
    ImageanalyticsComponent,
    AppendixComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    FormsModule,
    ChartsModule,
    Ng2TableModule,
    NgxGalleryModule ,
    // AppRoutingModule
    RouterModule.forRoot([
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '\Home', component: HomeComponent },
  { path: '\Equipment Specifications', component:EquipSpecsComponent },
   { path: '\Reports of Jobs', component: ReportsComponent },
   { path: '\Jobs', component: JobsComponent }, 
   {path: '\detailedreport/:jobid', component: ObservationsComponent},
   { path: '\Observations', component: ObservationsComponent },
   { path: '\Program Flight', component: ProgramflightComponent },
   { path: '\Areas of Interests', component: AreasofInterestComponent },
   { path: '\Thermal Images', component: ThermalimagesComponent },
   { path: '\Videos', component: VideosComponent },
   { path: '\Image Analytics', component: ImageanalyticsComponent },
   { path: '\Image Analytics', component: ImageanalyticsComponent },
   { path: '\Appendix', component: AppendixComponent },
    { path: '\Viewer/:path', component: ViewerComponent }
  

  ])
  ],
  providers: [DataService,globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
