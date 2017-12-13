
// export class JobsTableClass {
// 	JobId:string;
// 	Columns:string[];
// 	Data:number[];
// } 

import { JobsTableClass } from './JobsTableClass';

export const JobsTableData : JobsTableClass[] =[
{JobId:"Job-1",
Columns : [{title: 'Asset', name: 'asset'},
    {title: 'High Risk',className: 'text-warning', name: 'highrisk'},
    {title: 'Medium Risk', className: 'text-info', name: 'mediumrisk'},
    {title: 'Low Risk',className: 'text-success', name: 'lowrisk'}], 
Data : [{
    'asset': 'asset-1',
    'highrisk': '10',
    'mediumrisk': '8',
    'lowrisk': '12'
    },
     {
     'asset': 'asset-2',
    'highrisk': '10',
    'mediumrisk': '20',
    'lowrisk': '20'
     },
     {
    'asset': 'asset-3',
    'highrisk': '3',
    'mediumrisk': '4',
    'lowrisk': '3'
     }]},
{JobId:"Job-2",
Columns : [  {title: 'Asset', name: 'asset'},
    {title: 'High Risk',className: 'text-warning', name: 'highrisk'},
    {title: 'Medium Risk', className: 'text-info', name: 'mediumrisk'},
    {title: 'Low Risk',className: 'text-success', name: 'lowrisk'}
    ], Data : [{
    'asset': 'asset-1',
    'highrisk': '2',
    'mediumrisk': '10',
    'lowrisk': '8'
    },
     {
     'asset': 'asset-2',
    'highrisk': '4',
    'mediumrisk': '12',
    'lowrisk': '8'
     },
     {
    'asset': 'asset-3',
    'highrisk': '10',
    'mediumrisk': '25',
    'lowrisk': '15'
     }]},
{JobId:"Job-3",
Columns : [  {title: 'Asset', name: 'asset'},
    {title: 'High Risk',className: 'text-warning', name: 'highrisk'},
    {title: 'Medium Risk', className: 'text-info', name: 'mediumrisk'},
    {title: 'Low Risk',className: 'text-success', name: 'lowrisk'}
    ], 
 Data : [  
 {
     'asset': 'asset-2',
    'highrisk': '2',
    'mediumrisk': '5',
    'lowrisk': '3'
     },{
    'asset': 'asset-3',
    'highrisk': '1',
    'mediumrisk': '7',
    'lowrisk': '2'
     },{
    'asset': 'asset-1',
    'highrisk': '10',
    'mediumrisk': '30',
    'lowrisk': '10'
    }]}
];
