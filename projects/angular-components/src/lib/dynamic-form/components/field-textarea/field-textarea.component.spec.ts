import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcFieldTextareaComponent} from './field-textarea.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {FormControl, FormGroup} from "@angular/forms";

describe('FieldTextareaComponent', () => {
  let component: AcFieldTextareaComponent;
  let fixture: ComponentFixture<AcFieldTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldTextareaComponent, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldTextareaComponent);
    component = fixture.componentInstance;
    component.field = {type: "textarea", name: "name"};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
