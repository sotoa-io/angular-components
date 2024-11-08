import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcGroupComponent} from './group.component';
import {forwardRef} from "@angular/core";
import {AcDynamicFieldDirective} from "../dynamic-field.directive";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {MatError} from "@angular/material/form-field";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";

describe('AcGroupComponent', () => {
  let component: AcGroupComponent;
  let fixture: ComponentFixture<AcGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        forwardRef(() => AcDynamicFieldDirective),
        NgClass,
        MatError,
        MatAccordion,
        MatExpansionPanel,
        MatExpansionPanelHeader,
        MatExpansionPanelTitle,
        NgTemplateOutlet
      ],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcGroupComponent);
    component = fixture.componentInstance;
    component.field = {type: "group", name: "name", fields: []};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

