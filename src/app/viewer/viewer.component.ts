import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService }  from '../data.service';
import { globals } from 'globals';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

	 galleryOptions: NgxGalleryOptions[]=[];
    galleryImages: NgxGalleryImage[]=[];


  constructor( private route: ActivatedRoute,private dataservice:DataService,private g:globals) { }

  ngOnInit() {
  	document.getElementById("main").style.marginLeft = "1%";
 	const image_id = this.route.snapshot.paramMap.get('path');
 	this.getimages(image_id);
 	// console.log(image_id[0]);
  	this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                 preview: true,
                previewZoom: true,
                previewZoomStep: 0.1,
                previewZoomMax:2,
                previewZoomMin:1,
                zoomInIcon: 'fa fa-search-plus',
                zoomOutIcon: 'fa fa-search-minus',
                // previewFullscreen: true,
                // previewForceFullscreen: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                preview: true,
                previewZoom: true,
                previewZoomStep: 0.1,
                previewZoomMax:2,
                previewZoomMin:1,
                zoomInIcon: 'fa fa-search-plus',
                zoomOutIcon: 'fa fa-search-minus',
                // previewFullscreen: true,
                // previewForceFullscreen: true
            },
            // max-width 400
            {
                breakpoint: 400,
                width:'100%',
                height:'300px',
                preview: true,
                previewZoom: true,
                previewZoomStep: 0.1,
                previewZoomMax:2,
                previewZoomMin:1,
                zoomInIcon: 'fa fa-search-plus',
                zoomOutIcon: 'fa fa-search-minus',
                // previewFullscreen: true,
                // previewForceFullscreen: true
            }
        ];

       // this.galleryImages = [
       //      {
       //          small: '../../assets/BPCL_CCU_HA.png',
       //          medium: '../../assets/BPCL_CCU_HA.png',
       //          big: '../../assets/image-000069.jpg'
       //      },
       //      {
       //          small: '../../assets/BPCL_CCU_HA2.png',
       //          medium: '../../assets/BPCL_CCU_HA2.png',
       //          big: '../../assets/image-000069_LI.jpg'
       //      },
       //      {
       //          small: '../../assets/BPCL_CCU_HA3.png',
       //          medium: '../../assets/BPCL_CCU_HA3.png',
       //          big: '../../assets/image-000075.jpg'
       //      }
       //  ];
    }

    getimages(image_id:string){
    	// if(image_id[0]=='a'){
    	// 	this.dataservice.aoi_data(this.g.selecedjob,this.g.selectedasset).subscribe(x => this.galleryImages=x);
    	// }
    	// else(image_id[0]=='t'){
    	// 	this.dataservice.thermalimagesdata(this.g.selecedjob,this.g.selectedasset).subscribe(x => this.galleryImages=x);
    	// }
    }
  


}
