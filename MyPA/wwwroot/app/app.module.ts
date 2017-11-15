import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { HeaderComponent, FooterComponent, SlideMenuModule } from './layout/index'

import { routing } from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        SplashComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    imports: [
        BrowserModule,
        MatProgressSpinnerModule,
        SlideMenuModule,
        routing
    ]
})
export class AppModule {
    constructor() {
        //alert('AppModCtor');
    }
}