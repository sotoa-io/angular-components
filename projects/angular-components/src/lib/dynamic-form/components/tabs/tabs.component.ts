import {Component, forwardRef} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AcTabsConfig} from '../../models/tabs-config';
import {AcDynamicFieldDirective} from '../dynamic-field.directive';
import {NgClass} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {AbstractFieldComponent} from '../abstract-field/abstract-field.component';

@Component({
    selector: 'ac-tabs',
    imports: [
        ReactiveFormsModule,
        NgClass,
        forwardRef(() => AcDynamicFieldDirective),
        MatTabsModule
    ],
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class AcTabsComponent extends AbstractFieldComponent<AcTabsConfig> {
  get subGroup() {
    return this.group.controls[this.field.name] as FormGroup;
  }
}
