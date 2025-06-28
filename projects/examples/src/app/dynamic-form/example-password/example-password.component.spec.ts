import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePasswordComponent } from './example-password.component';

describe('ExamplePasswordComponent', () => {
  let component: ExamplePasswordComponent;
  let fixture: ComponentFixture<ExamplePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamplePasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
