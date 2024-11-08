import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesButtonComponent } from './examples-button.component';

describe('ExamplesButtonComponent', () => {
  let component: ExamplesButtonComponent;
  let fixture: ComponentFixture<ExamplesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamplesButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamplesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
