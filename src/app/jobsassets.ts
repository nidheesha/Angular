
// export var jobsassets = [
//   {
//     "name": "Asset-1",
//     "series": [
//       {
//         "name": "Low Risk",
//         "value": 10
//       },
//        {
//         "name": "Medium Risk",
//         "value": 12
//       },
//       {
//         "name": "High Risk",
//         "value": 5
//       }
//     ]
//   },

//   {
//     "name": "Asset-2",
//      "series": [
//       {
//         "name": "Low Risk",
//         "value": 10
//       },
//        {
//         "name": "Medium Risk",
//         "value": 6
//       },
//       {
//         "name": "High Risk",
//         "value": 2
//       }
//     ]
//   },

//   {
//     "name": "Asset-3",
//      "series": [
//       {
//         "name": "Low Risk",
//         "value": 10
//       },
//        {
//         "name": "Medium Risk",
//         "value": 3
//       },
//       {
//         "name": "High Risk",
//         "value": 6
//       }
//     ]
//   }
// ];
// export var single = [
//   {
//     "name": "Germany",
//     "value": 8940000
//   },
//   {
//     "name": "USA",
//     "value": 5000000
//   },
//   {
//     "name": "France",
//     "value": 7200000
//   }
// ];

// export var jobsassets = [
//  {
//   "JobID":"Job-1",
//   "data" : [
//    {
//     "name": "Asset-1",
//     "series": [{"name": "Low Risk","value": 10},{"name": "Medium Risk","value": 12},{"name": "High Risk","value": 5}]
//     },
//     {
//     "name": "Asset-2",
//     "series": [{"name": "Low Risk","value": 5},{"name": "Medium Risk","value": 18},{"name": "High Risk","value": 4}]
//     },
//     {
//     "name": "Asset-3",
//     "series": [{"name": "Low Risk","value": 13},{"name": "Medium Risk","value": 10},{"name": "High Risk","value": 2}]
//     }]
//  },
//   {
//   "JobID":"Job-2",
//   "data" : [
//     {
//     "name": "Asset-1",
//     "series": [{"name": "Low Risk","value": 13},{"name": "Medium Risk","value": 4},{"name": "High Risk","value": 7}]
//     },
//     {
//     "name": "Asset-2",
//     "series": [{"name": "Low Risk","value": 12},{"name": "Medium Risk","value": 10},{"name": "High Risk","value": 2}]
//     },
//     {
//     "name": "Asset-3",
//     "series": [{"name": "Low Risk","value": 10},{"name": "Medium Risk","value": 5},{"name": "High Risk","value": 12}]
//     }]
//  },
//   {
//   "JobID":"Job-3",
//   "data" : [
//    {
//     "name": "Asset-1",
//     "series": [{"name": "Low Risk","value": 18},{"name": "Medium Risk","value": 14},{"name": "High Risk","value": 3}]
//     },
//     {
//     "name": "Asset-2",
//     "series": [{"name": "Low Risk","value": 15},{"name": "Medium Risk","value": 9},{"name": "High Risk","value": 3}]
//     },
//     {
//     "name": "Asset-3",
//     "series": [{"name": "Low Risk","value": 10},{"name": "Medium Risk","value": 15},{"name": "High Risk","value": 8}]
//     }]
//  }

// ];


export const jobsassets:any[] = [
{
  "JobID":"Job-1",
  'labels':["Asset-1","Asset-2","Asset-3"],
   'data':[
        {label:'Low risk',data:[10,13,15]},
        {label:'Medium risk',data:[8,5,10]},
        {label:'High risk',data:[6,5,8]}
  ]
 },
 {
  "JobID":"Job-2",
  'labels':["Asset-1","Asset-2","Asset-3"],
   'data':[
        {label:'Low risk',data:[12,15,5]},
        {label:'Medium risk',data:[15,7,4]},
        {label:'High risk',data:[7,10,9]}
        ]
 },
 {
  "JobID":"Job-3",
  'labels':["Asset-1","Asset-2","Asset-3"],
   'data':[
        {label:'Low risk',data:[4,5,12]},
        {label:'Medium risk',data:[13,6,3]},
        {label:'High risk',data:[7,8,9]}

   ]
 }
];