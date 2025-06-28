import { Component, OnInit } from '@angular/core';
import { AcAffix } from '../../models/affix';
import { AcFieldInputConfig } from '../../models/field-input-config';
import { takeUntil } from 'rxjs/operators';
import { AbstractControlFieldComponent } from '../abstract-field/abstract-control-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";

@Component({
    selector: 'ac-field-input',
    imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, AcDynamicButtonComponent],
    templateUrl: './field-input.component.html',
    styleUrls: ['./field-input.component.scss']
})
export class AcFieldInputComponent extends AbstractControlFieldComponent<AcFieldInputConfig> implements OnInit {
  inputType: string = 'text';

  buttonAction(b: AcAffix) {
    if (b.action && this.field && this.group) {
      b.action(this.field, this.group, this.dynamicFormService.data!);
    }
  }

  override ngOnInit() {
    super.ngOnInit();
    this.inputType = this.field.inputType ?? 'text';
    const control = this.group.get(this.field.name);
    if (control) {
      control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
        if (value?.length == 0) {
          control.setValue(null);
        }
      });
    }
  }
}
