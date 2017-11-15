import { Component } from '@angular/core';

@Component({
    selector: 'components-footer',
    templateUrl: './footer.component.html'
})
/** footer component*/
export class FooterComponent {

    today: number = Date.now();

    /** footer ctor */
    constructor() {

    }
}