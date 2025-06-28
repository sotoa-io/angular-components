import { Component } from '@angular/core';
import { AcTextConfig } from '../../models/text-config';
import { AbstractFieldComponent } from '../abstract-field/abstract-field.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'ac-div-text',
    imports: [NgClass],
    templateUrl: './div-text.component.html',
    styleUrls: ['./div-text.component.scss']
})
export class AcDivTextComponent extends AbstractFieldComponent<AcTextConfig> {}
