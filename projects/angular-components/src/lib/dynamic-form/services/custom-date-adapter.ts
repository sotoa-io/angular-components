import { Injectable } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
// tslint:disable-next-line:no-duplicate-imports
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

@Injectable()
export class CustomDateAdapter extends MomentDateAdapter {
  formato = '';

  override parse(value: any) {
    if (value && typeof value == 'string') {
      return moment(value, this.formato, this.locale, true);
    }
    return value ? moment(value).locale(this.locale) : null;
  }
}
