import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcDynamicFormModalComponent} from './dynamic-form-modal.component';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {DynamicFormService} from "../services/dynamic-form.service";

describe('AcDynamicFormModalComponent', () => {
  let component: AcDynamicFormModalComponent;
  let fixture: ComponentFixture<AcDynamicFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [NoopAnimationsModule,
        AcDynamicFormModalComponent],
      providers: [
        DynamicFormService,
        {provide: MAT_DIALOG_DATA, useValue: {fields: [{type: 'checkbox', name: 'test'}], buttons: {}}},
        {provide: MatDialogRef, useValue: {}},
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AcDynamicFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
