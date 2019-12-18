import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'services', component: ServicesComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'about', component: AboutComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const RoutingProviders: any[] = [];
export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true});
