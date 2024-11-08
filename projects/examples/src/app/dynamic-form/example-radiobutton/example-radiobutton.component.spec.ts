import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleRadiobuttonComponent } from './example-radiobutton.component';

describe('ExampleRadiobuttonComponent', () => {
  let component: ExampleRadiobuttonComponent;
  let fixture: ComponentFixture<ExampleRadiobuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleRadiobuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
