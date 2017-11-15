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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var splash_component_1 = require("./splash/splash.component");
var material_1 = require("@angular/material");
var index_1 = require("./layout/index");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
        //alert('AppModCtor');
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            splash_component_1.SplashComponent,
            index_1.HeaderComponent,
            index_1.FooterComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        imports: [
            platform_browser_1.BrowserModule,
            material_1.MatProgressSpinnerModule,
            index_1.SlideMenuModule,
            app_routing_1.routing
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map