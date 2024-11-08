import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFileComponent } from './example-file.component';

describe('ExampleFileComponent', () => {
  let component: ExampleFileComponent;
  let fixture: ComponentFixture<ExampleFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
