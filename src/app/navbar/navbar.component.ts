import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  userName:string='mohamed';
  age:number=23;
  onSale:boolean=true;

   calcSalary():number {
    let days=3;
let final=3*300;
return final;    
  }

  imgSrc:string='/images/ILGIQEfCQ3OaggOupJhfgA.png'

  friends:string[]=['ahmed','mohamed','manoo','rana'];
  role:string='sdfs';
}
