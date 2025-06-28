import {Component} from '@angular/core';
import {
  AcDynamicButtonComponent
} from "../../../../../angular-components/src/lib/dynamic-button/dynamic-button.component";
import {MatDivider} from "@angular/material/divider";

@Component({
    selector: 'app-examples-button',
    imports: [AcDynamicButtonComponent, MatDivider],
    templateUrl: './examples-button.component.html',
    styleUrl: './examples-button.component.scss'
})
export class ExamplesButtonComponent {


  onClick() {
    console.log('Click');
  }
}
