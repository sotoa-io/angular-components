import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckCellComponent } from './custom-check-cell.component';

describe('CustomCheckCellComponent', () => {
  let component: CustomCheckCellComponent;
  let fixture: ComponentFixture<CustomCheckCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCheckCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCheckCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
