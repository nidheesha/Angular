import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { tab } from './tab';
import { tablist } from './tablist';
//import { droplist } from './droplist';
import { joblist } from './joblist';
import { ChartData } from './chartdataclass';
import { chartdata } from './chartdata';
import { JobsTableClass } from './JobsTableClass';
import { JobsTableData } from './JobsTableData';
import { ReportTableData } from './ReportTableData';
 import {  Reportcolumns } from './Reportcolumns';

@Injectable()
export class DataService {

  constructor() { }
 service1():Observable<tab[]>{
 	 return of(tablist);
 }
 
 // service2():Observable<tab[]>{
 // 	 return of(droplist);
 // }
 service2():Observable<tab[]>{
 	 return of(joblist);
 }
 reportcolumnservice():Observable<any>{
  return of(Reportcolumns);
 }
 reportdataservice():Observable<any>{
 	return of(ReportTableData);
 }

 jobstableservice(x:string):Observable<JobsTableClass>{
 	return of(JobsTableData.find(y => y.JobId == x));
 }
 chartservice(x:string):Observable<ChartData>{
 	return of(chartdata.find(y => y.JobId == x));
 }
}
