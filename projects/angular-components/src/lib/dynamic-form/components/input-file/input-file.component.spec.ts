import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcInputFileComponent} from './input-file.component';
import {signal} from "@angular/core";
import {AcDynamicForm} from "../../models/dynamic-form";
import {FormControl, FormGroup} from "@angular/forms";
import {AcFieldFileConfig} from "../../models/field-file-config";

describe('AcInputFileComponent', () => {
  let component: AcInputFileComponent;
  let fixture: ComponentFixture<AcInputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcInputFileComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcInputFileComponent);
    component = fixture.componentInstance;
    const field = signal<AcFieldFileConfig>({type: "file", name: "name"});
    const group = signal<FormGroup>(new FormGroup({
      name: new FormControl(""),
    }));
    component.field = field as unknown as typeof component.field;
    component.group = group as unknown as typeof component.group;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
