import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { EquipSpecsComponent  } from './equip-specs/equip-specs.component';
import { ReportsComponent  } from './reports/reports.component';
import { JobsComponent } from './jobs/jobs.component'
const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Equipment Specification', component:EquipSpecsComponent },
   { path: 'Report', component: ReportsComponent },
    { path: 'jobs', component: JobsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
