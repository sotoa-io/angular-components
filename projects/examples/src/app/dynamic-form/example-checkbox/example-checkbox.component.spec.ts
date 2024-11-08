import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCheckboxComponent } from './example-checkbox.component';

describe('ExampleCheckboxComponent', () => {
  let component: ExampleCheckboxComponent;
  let fixture: ComponentFixture<ExampleCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
