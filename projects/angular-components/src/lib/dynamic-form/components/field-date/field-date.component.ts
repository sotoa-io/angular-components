import { Component, Inject } from '@angular/core';
import { AcAffix } from '../../models/affix';
import { AcFieldDateConfig } from '../../models/field-date-config';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CustomDateAdapter } from '../../services/custom-date-adapter';
import { MyFormat } from '../../services/my-format';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { AbstractControlFieldComponent } from '../abstract-field/abstract-control-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";

const moment = _rollupMoment || _moment;

@Component({
  selector: 'ac-field-date',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatDatepickerModule, MatInputModule, MatButtonModule, AcDynamicButtonComponent],
  providers: [
    {
      provide: DateAdapter,
      useClass: CustomDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useClass: MyFormat },
  ],
  templateUrl: './field-date.component.html',
  styleUrls: ['./field-date.component.scss'],
})
export class AcFieldDateComponent extends AbstractControlFieldComponent<AcFieldDateConfig> {
  constructor(
    @Inject(MAT_DATE_FORMATS) private config: MyFormat,
    @Inject(DateAdapter) private customDateAdapter: CustomDateAdapter,
  ) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    this.config.dateInput = this.field.format ?? 'YYYY-MM-DD';
    this.customDateAdapter.formato = this.field.format ?? 'YYYY-MM-DD';
    this.customDateAdapter.setLocale('fr');

    const control = this.group.get(this.field.name);
    if (control) {
      if (typeof control.value === 'string') {
        control.setValue(moment(control.value, this.field.format));
      }
    }
  }

  buttonAction(b: AcAffix) {
    if (b.action && this.field && this.group) {
      b.action(this.field, this.group, this.dynamicFormService.data!);
    }
  }

  filterDate = (d: moment.Moment | null): boolean => {
    return this.field.filter ? this.field.filter!(d, this.field, this.group) : true;
  };

  onInputClick(picker: MatDatepicker<any>) {
    if (this.field.onlyPopup) {
      picker.open();
    }
  }
}
