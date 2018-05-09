import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//import { tab } from './tab';
//import { tablist } from './tablist';
//import { droplist } from './droplist';
import { joblist } from './joblist';
import { ChartData } from './chartdataclass';
import { chartdata } from './chartdata';
// import { JobsTableClass } from './JobsTableClass';
// import { JobsTableData } from './JobsTableData';
import { ReportTableData } from './ReportTableData';
 import {  Reportcolumns } from './Reportcolumns';
 import { jobsassets } from './jobsassets'


 import { navs1,navs2 } from './navs'
 import { observationscolumns, observationsdata} from './observationstabledata'
 import { pfimages } from  './programflightimages';
 import { aoi_images } from './aoi-images';
 import { thermalimages } from './thermalimages';
 import { assetsanalysed } from './assetsanalysed';

@Injectable()
export class DataService {

  constructor() { }
 // service1():Observable<tab[]>{
 // 	 return of(tablist);
 // }
 
 // service2():Observable<tab[]>{
 // 	 return of(droplist);
 // }

 page1tabs():Observable<string[]>{
 	return of(navs1);
 }
 page2tabs():Observable<string[]>{
 	return of(navs2);
 }
 observations_col_service():Observable<any[]>{
 	return of(observationscolumns);
 }
 observations_data_service(job:string,asset:string):Observable<any[]>{
 	var o = observationsdata.filter(k => k['JobID']==job);
	return of(o.find(t=> t['AssetID']==asset));
 	//return of(observationsdata.find(y => (y['JobID']==x && y['AssetID']==y)));
 }
 loadpfimages(job:string,asset:string):Observable<any[]>{
 	var o = pfimages.filter(k => k['JobID']==job);
	return of(o.find(t=> t['AssetID']==asset));
 }

 aoi_data(job:string,asset:string):Observable<any[]>{
 	var o = aoi_images.filter(k => k['JobID']==job);
	return of(o.find(t=> t['AssetID']==asset));
 	//return of(aoi_images);
 }
 thermalimagesdata(job:string,asset:string):Observable<any[]>{
 	var o = thermalimages.filter(k => k['JobID']==job);
	return of(o.find(t=> t['AssetID']==asset));
 }
 assetsofjob(x:string):Observable<any>{
 	console.log(x);
 	return of(assetsanalysed.find(y => y['JobID']==x));
 }

 service2():Observable<string[]>{
 	 return of(joblist);
 }
 reportcolumnservice():Observable<any>{
  return of(Reportcolumns);
 }
 reportdataservice():Observable<any>{
 	return of(ReportTableData);
 }

 // jobstableservice(x:string):Observable<JobsTableClass>{
 // 	return of(JobsTableData.find(y => y.JobId == x));
 // }
 // chartservice(x:string):Observable<ChartData>{
 // 	return of(chartdata.find(y => y.JobId == x));
 // }
 stackbarservice(x:string):Observable<any>{
 	//console.log(jobsassets[0]['data']);
 	return of(jobsassets.find(y=> y['JobID']==x));
 }
}
