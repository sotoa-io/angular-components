import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcFieldAutocompleteComponent} from './field-autocomplete.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('FieldAutocompleteComponent', () => {
  let component: AcFieldAutocompleteComponent;
  let fixture: ComponentFixture<AcFieldAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldAutocompleteComponent, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldAutocompleteComponent);
    component = fixture.componentInstance;
    component = fixture.componentInstance;
    component.field = {type: "autocomplete", name: "name"};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
