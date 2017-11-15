﻿import { Component } from '@angular/core';
import { SlideMenuModule } from '../slideMenuNavigation/slideMenu';

@Component({
    selector: 'components-header',
    templateUrl: './header.component.html'
})
/** header component*/
export class HeaderComponent {
    /** header ctor */
    constructor() {

    }
    private menuItemsArray: any[] = [
        { "title": "Electricity", "link": "#" },
        { "title": "Mobile Bill", "link": "#" },
        {
            "title": "Home and Kitchen", "link": "#",
            "subItems": [
                { "title": "Furniture", "link": "#" },
                { "title": "Cookware", "link": "#" },
            ]
        },
        {
            "title": "Car and Bike Accessories", "link": "#",
            "subItems": [
                { "title": "Tyres and Alloys", "link": "#" },
                { "title": "Comfort and Safety", "link": "#" },
            ]
        },
    ];

    public onMenuClose() {
        console.log("menu closed");
    }
    public onMenuOpen() {
        console.log("menu Opened");
    }
    private onItemSelect(item: any) {
        console.log(item);
    }
}