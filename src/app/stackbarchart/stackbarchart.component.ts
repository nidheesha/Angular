// import { Component, OnInit, Input } from '@angular/core';
// // import { jobsassets } from '../jobsassets';
// //import { jobsassets } from '../jobsassets';
// @Component({
//   selector: 'app-stackbarchart',
//   templateUrl: './stackbarchart.component.html',
//   styleUrls: ['./stackbarchart.component.css']
// })
// export class StackbarchartComponent implements OnInit {

//   // single: any[];
//   // multi: any[];
//   @Input()
//   jobsassets: any[];
//   // @Input()
//   // data:any[]=[];

//   width:number;

//   view: any[] = [ ];

//   // options
//   showXAxis = true;
//   showYAxis = true;
//   gradient = false;
//   showLegend = true;
//   showXAxisLabel = true;
//   @Input()
//   xAxisLabel;// = 'Country';
//   showYAxisLabel = true;
//   @Input()
//   yAxisLabel;// = 'Population';
//   barPadding = 100;//= (this.width/this.jobsassets.length )*10;

//   colorScheme = {
//     // domain: [ '#5AA454','#C7B42C', '#A10A28', '#AAAAAA']
//     domain: ['#C7B42C' ,'#FF6600' , '#A10A28', '#AAAAAA']

//   };


//   constructor() {
//   	//Object.assign(this, { this.jobsassets }) ;
//       }

//   ngOnInit() {
//   	//this.width = this.jobsassets.length*55;
//   //  this.barPadding = (this.width/(this.jobsassets.length*1.4) );
// //this.multi = this.data;
//   }

//   onSelect(event) {
//     console.log(event);
//   }

// }




// export class AppComponent {
 
//   constructor() {
   
//   }
  
//   onSelect(event) {
//     console.log(event);
//   }
// }


// export class AppModule {}




    import { Component,OnInit,Input } from '@angular/core';
     
    @Component({
      selector: 'app-stackbarchart',
      templateUrl: './stackbarchart.component.html',
      styleUrls: ['./stackbarchart.component.css']

    })
    export class StackbarchartComponent {
      public barChartOptions:any = {
        legend: {position: 'right'},
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: false,
        scales:{
          xAxes: [{
            //barThickness = 100,
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
      };
    colors=  [{ backgroundColor: ['#C7B42C','#C7B42C','#C7B42C'] }, 
              { backgroundColor: ['#FF6600','#FF6600','#FF6600'] }, 
              { backgroundColor: ['#A10A28','#A10A28','#A10A28'] },
              { backgroundColor: ['#AAAAAA','#AAAAAA','#AAAAAA'] }];

//myColors = [{ backgroundColor: ['#C7B42C' ,'#FF6600' , '#A10A28', '#AAAAAA']}];
//domain: ['#C7B42C' ,'#FF6600' , '#A10A28', '#AAAAAA'];
     // public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
     
     // public barChartData:any[] = [
      //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      // ];
      @Input()
      barChartLabels:string[]=[];
      @Input()
      public barChartData:any[]=[];

     
      // events
      public chartClicked(e:any):void {
        console.log(e);
      }
     
      public chartHovered(e:any):void {
        console.log(e);
      }
     
      // public randomize():void {
      //   // Only Change 3 values
      //   let data = [
      //     Math.round(Math.random() * 100),
      //     59,
      //     80,
      //     (Math.random() * 100),
      //     56,
      //     (Math.random() * 100),
      //     40];
      //   let clone = JSON.parse(JSON.stringify(this.barChartData));
      //   clone[0].data = data;
      //   this.barChartData = clone;
      //   /**
      //    * (My guess), for Angular to recognize the change in the dataset
      //    * it has to change the dataset variable directly,
      //    * so one way around it, is to clone the data, change it and then
      //    * assign it;
      //    */
      // }
    }

