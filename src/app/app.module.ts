import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';

// MODULES
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RoutingModule, RoutingProviders } from './app.routing';

// OTROS
import localeEs from '@angular/common/locales/es-MX';


// COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

registerLocaleData(localeEs);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    CarouselModule
  ],
  providers: [RoutingProviders, {provide: LOCALE_ID, useValue: 'es-MX'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
