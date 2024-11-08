import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDynamicFormModalComponent } from './example-dynamic-form-modal.component';

describe('ExampleDynamicFormModalComponent', () => {
  let component: ExampleDynamicFormModalComponent;
  let fixture: ComponentFixture<ExampleDynamicFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDynamicFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDynamicFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
