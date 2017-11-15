import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { System } from 'systemjs';

import { SplashComponent } from './splash.component';

@NgModule({
    declarations: [SplashComponent],
    bootstrap: [SplashComponent],
    imports: [
        BrowserModule,
        MatProgressSpinnerModule
    ]
})
export class SplashModule {
    constructor()
    {
        //alert('SplashCtor');
    }
}
