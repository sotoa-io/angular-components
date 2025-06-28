import {Component, forwardRef} from '@angular/core';
import {AcRowConfig} from '../../models/row-config';
import {AbstractFieldComponent} from '../abstract-field/abstract-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {AcDynamicFieldDirective} from "../dynamic-field.directive";

@Component({
    selector: 'ac-row',
    imports: [
        ReactiveFormsModule,
        NgClass,
        forwardRef(() => AcDynamicFieldDirective)
    ],
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.scss']
})
export class AcRowComponent extends AbstractFieldComponent<AcRowConfig> {
}
