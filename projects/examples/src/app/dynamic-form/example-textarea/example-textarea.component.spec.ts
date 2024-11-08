import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTextareaComponent } from './example-textarea.component';

describe('ExampleTextareaComponent', () => {
  let component: ExampleTextareaComponent;
  let fixture: ComponentFixture<ExampleTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
