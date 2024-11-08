import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDateComponent } from './example-date.component';

describe('ExampleDateComponent', () => {
  let component: ExampleDateComponent;
  let fixture: ComponentFixture<ExampleDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
