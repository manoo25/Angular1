import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {path:'',redirectTo:"home",pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'About'},
    {path:'portfolio',component:PortofolioComponent,title:'Portfolio'},
    {path:'contact',component:ContactComponent,title:'Contact'}

      


];
