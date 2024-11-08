import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDynamicFormComponent } from './example-dynamic-form.component';

describe('ExampleDynamicFormComponent', () => {
  let component: ExampleDynamicFormComponent;
  let fixture: ComponentFixture<ExampleDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDynamicFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
