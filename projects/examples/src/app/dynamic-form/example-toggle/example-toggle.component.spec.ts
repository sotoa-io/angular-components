import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleToggleComponent } from './example-toggle.component';

describe('ExampleToggleComponent', () => {
  let component: ExampleToggleComponent;
  let fixture: ComponentFixture<ExampleToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
