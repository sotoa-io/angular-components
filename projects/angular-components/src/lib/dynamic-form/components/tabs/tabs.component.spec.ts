import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcTabsComponent} from './tabs.component';
import {DynamicFormService} from "../../services/dynamic-form.service";
import {FormControl, FormGroup} from "@angular/forms";

describe('AcTabsComponent', () => {
  let component: AcTabsComponent;
  let fixture: ComponentFixture<AcTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTabsComponent],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcTabsComponent);
    component = fixture.componentInstance;
    component.field = {type: "tabs", name: "name", tabs: []};
    component.group = new FormGroup({
      name: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
