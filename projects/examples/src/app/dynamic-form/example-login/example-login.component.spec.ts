import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLoginComponent } from './example-login.component';

describe('ExampleLoginComponent', () => {
  let component: ExampleLoginComponent;
  let fixture: ComponentFixture<ExampleLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
