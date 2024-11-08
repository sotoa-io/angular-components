import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDynamicFormStepperComponent } from './example-dynamic-form-stepper.component';

describe('ExampleDynamicFormStepperComponent', () => {
  let component: ExampleDynamicFormStepperComponent;
  let fixture: ComponentFixture<ExampleDynamicFormStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDynamicFormStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDynamicFormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
