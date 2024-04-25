import { Routes } from '@angular/router';
import { HomeComponent } from './Feature/home/home.component';
import { AboutComponent } from './Feature/about/about.component';
import { ContactComponent } from './Feature/contact/contact.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent}

];
