import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcArrayComponent} from './array.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";

describe('AcArrayComponent', () => {
  let component: AcArrayComponent;
  let fixture: ComponentFixture<AcArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AcArrayComponent],
      providers: [DynamicFormService]
    });
    fixture = TestBed.createComponent(AcArrayComponent);
    component = fixture.componentInstance;
    component.field = {type: "array", name: "arrayName", field: {type: 'group', name: '', fields: []}};
    component.group = new FormGroup({
      arrayName: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
