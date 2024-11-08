import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcTableCellComponent} from './table-cell.component';
import {AcTableCell} from "../../models/table-cell";
import {Component} from "@angular/core";

@Component({
  selector: "comp",
  standalone: true,
  template: '<h1>Test</h1>'
})
export class Comp implements AcTableCell {
  row: any = {};
}

describe('AcTableCellComponent', () => {
  let component: AcTableCellComponent;
  let fixture: ComponentFixture<AcTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcTableCellComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcTableCellComponent);
    component = fixture.componentInstance;
    component.column = {key: 'test', label: 'test', component: Comp};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
