"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeaderComponent = (function () {
    /** header ctor */
    function HeaderComponent() {
        this.menuItemsArray = [
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
    }
    HeaderComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    HeaderComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    HeaderComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'components-header',
        templateUrl: './header.component.html'
    })
    /** header component*/
    ,
    __metadata("design:paramtypes", [])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map