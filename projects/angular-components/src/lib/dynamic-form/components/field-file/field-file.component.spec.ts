import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcFieldFileComponent} from './field-file.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";

describe('FieldFileComponent', () => {
  let component: AcFieldFileComponent;
  let fixture: ComponentFixture<AcFieldFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldFileComponent],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldFileComponent);
    component = fixture.componentInstance;
    component.field = {type: "file", name: "name"};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
