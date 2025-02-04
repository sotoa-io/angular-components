import {Component} from '@angular/core';
import {AcFieldAutocompleteConfig} from '../../models/field-autocomplete-config';
import {map, Observable, startWith, switchMap, tap} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AcAffix} from '../../models/affix';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgClass} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";

@Component({
  selector: 'ac-field-autocomplete',
  standalone: true,
    imports: [MatFormFieldModule, ReactiveFormsModule, NgClass, MatAutocompleteModule, MatIconModule, AsyncPipe, MatButtonModule, MatInputModule, AcDynamicButtonComponent],
  templateUrl: './field-autocomplete.component.html',
  styleUrls: ['./field-autocomplete.component.scss'],
})
export class AcFieldAutocompleteComponent extends AbstractControlFieldComponent<AcFieldAutocompleteConfig> {
  filteredOptions: Observable<any[]> | undefined;
  private options: any[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    if (this.field.options) {
      this.options = this.field.options;
      this.onValueChange();
    } else if (this.field.asyncOptions) {
      this.field.asyncOptions.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((x) => {
        this.options = x;
        this.onValueChange();
      });
    }
  }

  buttonAction(b: AcAffix) {
    if (b.action) {
      b.action(this.field, this.group, this.dynamicFormService.data!);
    }
  }

  displayWith(option?: any): any {
    if (this.field.displayWith) {
      return this.field.displayWith(option);
    }
    const val: any = this.options.filter((x) => {
      let optVal;
      if (this.field.valueKey) {
        optVal = option && typeof option === 'object' ? String(option[this.field.valueKey]) : String(option);
      } else {
        optVal = String(option);
      }
      const xVal = this.field.valueKey ? String(x[this.field.valueKey]) : String(x);
      return xVal === optVal;
    })[0];
    return val && this.field.labelKey ? val[this.field.labelKey] : val;
  }

  onBlur(): void {
    if (this.field.matchOption) {
      setTimeout(() => {
        const value = this.group.get(this.field.name)?.value;
        const opt = this.options.filter(
          (x) =>
            (!this.field.labelKey && value === x) ||
            (this.field.labelKey && (value === x[this.field.labelKey] || (value && value[this.field.labelKey] === x[this.field.labelKey]))),
        );

        if (opt.length === 1) {
          this.group.get(this.field.name)?.setValue(opt[0]);
        } else {
          this.group.get(this.field.name)?.setValue(null);
        }
      }, 500);
    }
  }

  private onValueChange() {
    if (this.field.externalFilteredOptions) {
      // @ts-ignore
      this.filteredOptions = this.group.get(this.field.name).valueChanges.pipe(
        debounceTime(500),
        startWith(''),
        switchMap((value) => {
          // @ts-ignore
          return this.field.externalFilteredOptions(value, this.field, this.group);
        }),
        tap((val) => (this.options = val)),
        takeUntilDestroyed(this.destroyRef),
      );
    } else {
      this.filteredOptions = this.group.get(this.field.name)?.valueChanges.pipe(
        startWith(this.group.get(this.field.name)?.value),
        map((value) => this._filter(value)),
        takeUntilDestroyed(this.destroyRef),
      );
    }
  }

  private _filter(value: string | undefined): string[] {
    const val = String(value);
    return this.options.filter((option) => {
      const v = this.field.labelKey ? option[this.field.labelKey] : option;
      return !value || v.toLowerCase().indexOf(val.toLowerCase()) !== -1;
    });
  }

  reset() {
    this.control?.setValue(null);
  }
}
