import {ComponentFixture, TestBed} from "@angular/core/testing";

import {AcDynamicFormStepperComponent} from "./dynamic-form-stepper.component";
import {DynamicFormService} from "../services/dynamic-form.service";
import {ReactiveFormsModule} from "@angular/forms";
import {signal} from "@angular/core";
import {AcDynamicFormStepper} from "../models/dynamic-form-stepper";

describe("AcDynamicFormStepperComponent", () => {
  let component: AcDynamicFormStepperComponent;
  let fixture: ComponentFixture<AcDynamicFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AcDynamicFormStepperComponent],
      providers: [DynamicFormService]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDynamicFormStepperComponent);
    component = fixture.componentInstance;
    const config = signal<AcDynamicFormStepper>({steps: [], buttons: {}});
    component.config = config as unknown as typeof component.config;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("have a form", () => {
    expect(component.form).toBeTruthy();
    expect(component.controls).toBeTruthy();
    expect(component.changes).toBeTruthy();
    expect(component.valid).toBeTruthy();
    expect(component.value).toBeTruthy();
  });

});
