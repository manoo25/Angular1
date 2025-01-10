import { Component } from '@angular/core';


@Component({
  selector: 'app-portofolio',
  imports: [],
  templateUrl: './portofolio.component.html',
  styleUrl: './portofolio.component.css'
})
export class PortofolioComponent {

  images: string[] = [
    'images/portof/poert1.png',
    'images/portof/port2.png',
    'images/portof/port3.png',
    'images/portof/poert1.png',
    'images/portof/port2.png',
    'images/portof/port3.png'
  ];
   i:number=-1;
   x:Number=-1;
  selectItem(index: number) {
    this.i = index;
    console.log('Selected Index:', index);
  
  }

}
