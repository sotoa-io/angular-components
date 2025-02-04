import {
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  InputSignal,
  output,
  OutputEmitterRef
} from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicFormService} from '../services/dynamic-form.service';
import {AcButton, AcDynamicForm} from '../models/dynamic-form';
import {distinctUntilChanged, Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import {AcDynamicFieldDirective} from '../components/dynamic-field.directive';
import {NgClass} from '@angular/common';
import {MatError} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {AcDynamicButtonComponent} from "../../dynamic-button/dynamic-button.component";
import * as _ from "lodash-es";

@Component({
  exportAs: 'dynamicForm',
  selector: 'ac-dynamic-form',
  standalone: true,
  imports: [AcDynamicFieldDirective, NgClass, ReactiveFormsModule, MatError, MatIconModule, MatButtonModule, AcDynamicButtonComponent],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [DynamicFormService],
})
export class AcDynamicFormComponent {
  private dynamicFormService: DynamicFormService = inject(DynamicFormService);
  private destroyRef = inject(DestroyRef);
  config: InputSignal<AcDynamicForm | null> = input.required<AcDynamicForm | null>();
  initialValues: InputSignal<any> = input<any>();
  formCancel: OutputEmitterRef<void> = output<void>();
  formSubmit: OutputEmitterRef<FormGroup> = output<FormGroup>();
  formChange: OutputEmitterRef<FormGroup> = output<FormGroup>();

  get form(): FormGroup | undefined {
    return this.dynamicFormService.form;
  }

  get controls(): { [key: string]: AbstractControl } | null {
    return this.form ? this.form.controls : null;
  }

  get changes(): Observable<any> | null {
    return this.form ? this.form.valueChanges : null;
  }

  get valid(): boolean | null {
    return this.form ? this.form.valid : null;
  }

  get value(): any {
    return this.form ? this.form.value : null;
  }

  constructor() {
    effect(() => {
      if (!this.form && this.config() != null) {
        this.createForm();
      }
      if (this.initialValues() && this.form && this.form.pristine) {
        this.setValue(this.initialValues());
      }
    });
  }

  createForm() {
    this.dynamicFormService.createForm(this.config()!.fields, this.config()!.validations, this.config()!.updateOn, this.initialValues());
    this.formChange.emit(this.form!);
    this.form!.valueChanges
    .pipe(
      distinctUntilChanged(),
      debounceTime(this.config()!.debounceTime ?? 0),
      takeUntilDestroyed(this.destroyRef)
    )
    .subscribe(() => {
      this.formChange.emit(this.form!);
    });
  }

  setValue(values: { [key: string]: any }) {
    this.form!.setValue(values);
    this.form!.updateValueAndValidity();
  }

  onClickButton(button: AcButton) {
    if (button.type === 'reset') {
      this.reset();
    }
    if (button.action) {
      button.action(this.form!);
    }
  }

  reset() {
    this.form!.reset();
    this.formCancel.emit();
  }

  handleSubmit(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.form!.valid) {
      this.formSubmit.emit(this.form!);
    } else {
      this.form!.markAllAsTouched();
      _.defer(() => {
        this.focusFirstInvalidControl();
      });
    }
  }

  focusFirstInvalidControl() {
    // TODO
  }
}
