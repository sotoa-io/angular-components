import {Component, forwardRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AcGroupConfig} from '../../models/group-config';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {MatError} from '@angular/material/form-field';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {AcDynamicFieldDirective} from "../dynamic-field.directive";

@Component({
  selector: 'ac-group',
  standalone: true,
  imports: [
    forwardRef(() => AcDynamicFieldDirective),
    NgClass,
    MatError,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgTemplateOutlet
  ],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class AcGroupComponent extends AbstractControlFieldComponent<AcGroupConfig> {
  get subGroup() {
    return this.group.controls[this.field.name] as FormGroup;
  }
}
