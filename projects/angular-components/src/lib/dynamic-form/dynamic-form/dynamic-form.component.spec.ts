import {ComponentFixture, TestBed} from "@angular/core/testing";

import {AcDynamicFormComponent} from "./dynamic-form.component";
import {DynamicFormService} from "../services/dynamic-form.service";
import {ReactiveFormsModule} from "@angular/forms";
import {signal} from "@angular/core";
import {AcDynamicForm} from "../models/dynamic-form";

describe("AcDynamicFormComponent", () => {
  let component: AcDynamicFormComponent;
  let fixture: ComponentFixture<AcDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, AcDynamicFormComponent],
      providers: [DynamicFormService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcDynamicFormComponent);
    component = fixture.componentInstance;
    const config = signal<AcDynamicForm>({fields: []});
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
