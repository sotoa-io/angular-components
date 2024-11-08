import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcFieldDateComponent} from './field-date.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('FieldDateComponent', () => {
  let component: AcFieldDateComponent;
  let fixture: ComponentFixture<AcFieldDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldDateComponent, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldDateComponent);
    component = fixture.componentInstance;
    component.field = {type: "date", name: "name"};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
