import {Component} from '@angular/core';
import {AcFieldRadioButtonConfig} from '../../models/field-radio-button-config';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import {MatError} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInput} from "@angular/material/input";

@Component({
    selector: 'ac-field-radio-button',
    imports: [ReactiveFormsModule, NgClass, MatRadioModule, MatError, MatTooltipModule, MatIconModule, MatInput],
    templateUrl: './field-radio-button.component.html',
    styleUrls: ['./field-radio-button.component.scss']
})
export class AcFieldRadioButtonComponent extends AbstractControlFieldComponent<AcFieldRadioButtonConfig> {
}
