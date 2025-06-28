import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnInit,
  output,
  OutputEmitterRef,
  SimpleChanges
} from "@angular/core";
import {AbstractControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DynamicFormService} from "../services/dynamic-form.service";
import {BehaviorSubject, distinctUntilChanged, map, Observable} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {AcDynamicFieldDirective} from "../components/dynamic-field.directive";
import {AsyncPipe, NgClass, NgTemplateOutlet} from "@angular/common";
import {MatError} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTab, MatTabLabel} from "@angular/material/tabs";
import {AcDynamicFormStepper, AcStepperFormButton} from '../models/dynamic-form-stepper';
import {MatStepperModule, StepperOrientation} from "@angular/material/stepper";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {BreakpointObserver} from "@angular/cdk/layout";
import {AcDynamicButtonComponent} from "../../dynamic-button/dynamic-button.component";

@Component({
    exportAs: "dynamicFormStepper",
    selector: "ac-dynamic-form-stepper",
    imports: [AcDynamicFieldDirective, NgClass, ReactiveFormsModule, MatError,
        MatIconModule, MatButtonModule, NgTemplateOutlet, MatSidenavModule, MatListModule, MatTab, MatTabLabel,
        MatStepperModule, AsyncPipe, AcDynamicButtonComponent],
    templateUrl: "./dynamic-form-stepper.component.html",
    styleUrls: ["./dynamic-form-stepper.component.scss"],
    providers: [
        DynamicFormService, {
            provide: STEPPER_GLOBAL_OPTIONS,
            useValue: { showError: true, displayDefaultIndicatorType: false },
        }
    ]
})
export class AcDynamicFormStepperComponent implements OnInit, OnChanges {
  private dynamicFormService: DynamicFormService = inject(DynamicFormService);
  private destroyRef: DestroyRef = inject(DestroyRef);
  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  config: InputSignal<AcDynamicFormStepper> = input.required<AcDynamicFormStepper>();
  initialValues: InputSignal<any> = input<any>();
  formSubmit: OutputEmitterRef<FormGroup> = output<FormGroup>();
  formChange: OutputEmitterRef<FormGroup> = output<FormGroup>();
  stepperOrientation: BehaviorSubject<StepperOrientation> = new BehaviorSubject<StepperOrientation>('horizontal');

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

  ngOnInit() {
    this.dynamicFormService.createFormStepper(this.config().steps, this.config().validations, this.config().updateOn, this.initialValues);
    this.onValueChanges();
    this.form!.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(this.config().debounceTime ?? 0),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.onValueChanges();
      });

    if (this.config().orientation === 'responsive') {
      const breakpoint = this.config().responsiveBreakpoint ?? '800px'
      this.breakpointObserver
        .observe('(min-width: ' + breakpoint + ')')
        .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')))
        .subscribe(this.stepperOrientation);
    } else if (this.config().orientation) {
      this.stepperOrientation.next(this.config().orientation as StepperOrientation);
    }
  }

  getSubGroup(stepName: string) {
    return this.form!.controls[stepName] as FormGroup;
  }

  onValueChanges() {
    this.formChange.emit(this.form!);
    if (this.config().onValueChanges) {
      this.config().onValueChanges!(this.form!, this.config().steps);
      this.cdr.detectChanges();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["initialValues"] && this.form) {
      this.setValue(this.initialValues);
    }
  }

  setValue(values: { [key: string]: any }) {
    this.form!.setValue(values);
    this.form!.updateValueAndValidity();
  }

  onClickButton(button: AcStepperFormButton) {
    if (button.type === 'submit') {
      this.formSubmit.emit(this.form!);
    }
    if (button.action) {
      button.action(this.form!);
    }
  }

}
