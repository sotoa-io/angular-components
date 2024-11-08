import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcDynamicButtonComponent} from './dynamic-button.component';
import {MatButtonModule} from "@angular/material/button";

describe('AcButtonComponent', () => {
  let component: AcDynamicButtonComponent;
  let fixture: ComponentFixture<AcDynamicButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcDynamicButtonComponent, MatButtonModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcDynamicButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
