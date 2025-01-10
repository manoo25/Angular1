import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FotterComponent } from "./fotter/fotter.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { PortofolioComponent } from "./portofolio/portofolio.component";
import { ContactComponent } from "./contact/contact.component";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FotterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
