import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcRowComponent} from './row.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('AcRowComponent', () => {
  let component: AcRowComponent;
  let fixture: ComponentFixture<AcRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcRowComponent, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcRowComponent);
    component = fixture.componentInstance;
    component.field = {type: "row", name: "name", fields: []};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
