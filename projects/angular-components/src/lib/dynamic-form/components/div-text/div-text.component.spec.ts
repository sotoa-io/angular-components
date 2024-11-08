import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcDivTextComponent} from './div-text.component';
import {DynamicFormService} from "../../services/dynamic-form.service";

describe('AcDivTextComponent', () => {
  let component: AcDivTextComponent;
  let fixture: ComponentFixture<AcDivTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDivTextComponent],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcDivTextComponent);
    component = fixture.componentInstance;
    component.field = {type: "text", name: "name", description: "name"};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
