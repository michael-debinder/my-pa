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
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var clickOutside_1 = require("./clickOutside");
var SlideMenu = (function () {
    function SlideMenu(_elementRef, sanitizer) {
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        this.open = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        this.itemSelect = new core_1.EventEmitter();
        this.addOverlayElement();
    }
    SlideMenu.prototype.ngOnInit = function () {
        this.menuState = false;
    };
    SlideMenu.prototype.ngAfterViewInit = function () {
    };
    SlideMenu.prototype.menuToggle = function () {
        this.menuState = !this.menuState;
        this.toggleOverlay();
        if (this.menuState) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
    };
    SlideMenu.prototype.closeMenu = function () {
        this.menuState = false;
        this.overlayElem.style['opacity'] = 0;
    };
    SlideMenu.prototype.onItemClick = function (item) {
        this.itemSelect.emit(item);
    };
    SlideMenu.prototype.toggleSubMenu = function (item) {
        item.expand = !item.expand;
    };
    SlideMenu.prototype.addOverlayElement = function () {
        this.overlayElem = document.createElement('div');
        this.overlayElem.classList.add('cuppa-menu-overlay');
        this.overlayElem.style['position'] = 'fixed';
        this.overlayElem.style['background'] = 'rgba(0, 0, 0, 0.7)';
        this.overlayElem.style['top'] = 0;
        this.overlayElem.style['left'] = 0;
        this.overlayElem.style['right'] = 0;
        this.overlayElem.style['bottom'] = 0;
        this.overlayElem.style['opacity'] = 0;
        this.overlayElem.style['pointer-events'] = 'none';
        this.overlayElem.style['transition'] = 'all .2s linear';
        document.getElementsByTagName('body')[0].appendChild(this.overlayElem);
    };
    SlideMenu.prototype.toggleOverlay = function () {
        if (this.overlayElem.style['opacity'] == 0) {
            this.overlayElem.style['opacity'] = 1;
        }
        else if (this.overlayElem.style['opacity'] == 1) {
            this.overlayElem.style['opacity'] = 0;
        }
    };
    return SlideMenu;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SlideMenu.prototype, "menulist", void 0);
__decorate([
    core_1.Output('open'),
    __metadata("design:type", core_1.EventEmitter)
], SlideMenu.prototype, "open", void 0);
__decorate([
    core_1.Output('close'),
    __metadata("design:type", core_1.EventEmitter)
], SlideMenu.prototype, "close", void 0);
__decorate([
    core_1.Output('onItemSelect'),
    __metadata("design:type", core_1.EventEmitter)
], SlideMenu.prototype, "itemSelect", void 0);
SlideMenu = __decorate([
    core_1.Component({
        selector: 'cuppa-slidemenu',
        templateUrl: './slidemenu.template.html',
        styleUrls: ['./slidemenu.styles.css']
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer])
], SlideMenu);
exports.SlideMenu = SlideMenu;
var SlideMenuModule = (function () {
    function SlideMenuModule() {
    }
    return SlideMenuModule;
}());
SlideMenuModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [SlideMenu, clickOutside_1.ClickOutsideDirective],
        exports: [SlideMenu, clickOutside_1.ClickOutsideDirective]
    })
], SlideMenuModule);
exports.SlideMenuModule = SlideMenuModule;
//# sourceMappingURL=slideMenu.js.map