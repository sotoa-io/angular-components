import { Component } from '@angular/core';
import { AbstractControlFieldComponent } from '../abstract-field/abstract-control-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError } from '@angular/material/form-field';
import { AcFieldToggleConfig } from '../../models/field-toggle-config';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'ac-field-toggle',
    imports: [ReactiveFormsModule, NgClass, MatCheckboxModule, MatError, MatSlideToggleModule],
    templateUrl: './field-toggle.component.html',
    styleUrls: ['./field-toggle.component.scss']
})
export class AcFieldToggleComponent extends AbstractControlFieldComponent<AcFieldToggleConfig> {}
