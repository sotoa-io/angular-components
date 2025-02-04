import {Component} from '@angular/core';
import {AcFieldSelectConfig} from '../../models/field-select-config';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {AcAffix} from '../../models/affix';
import {isObservable} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'ac-field-select',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatSelectModule, MatButton, AcDynamicButtonComponent, MatInput],
  templateUrl: './field-select.component.html',
  styleUrls: ['./field-select.component.scss'],
})
export class AcFieldSelectComponent extends AbstractControlFieldComponent<AcFieldSelectConfig> {
  options: any[] = [];

  override ngOnInit() {
    super.ngOnInit();
    if (isObservable(this.field.options)) {
      this.field.options.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((options) => {
        this.options = options;
      });
    } else {
      this.options = this.field.options;
    }
  }

  buttonAction(b: AcAffix) {
    if (b.action && this.field && this.group) {
      b.action(this.field, this.group, this.dynamicFormService.data!);
    }
  }

}
