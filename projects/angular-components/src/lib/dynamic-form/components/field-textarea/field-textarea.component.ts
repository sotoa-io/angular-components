import {Component} from '@angular/core';
import {AcAffix} from '../../models/affix';
import {AcFieldTextareaConfig} from '../../models/field-textarea-config';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";

@Component({
  selector: 'ac-field-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatInputModule, MatButtonModule, AcDynamicButtonComponent],
  templateUrl: './field-textarea.component.html',
  styleUrls: ['./field-textarea.component.scss'],
})
export class AcFieldTextareaComponent extends AbstractControlFieldComponent<AcFieldTextareaConfig> {
  buttonAction(b: AcAffix) {
    if (b.action && this.field && this.group) {
      b.action(this.field, this.group, this.dynamicFormService.data!
      );
    }
  }
}
