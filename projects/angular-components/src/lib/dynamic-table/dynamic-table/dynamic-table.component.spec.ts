import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AcDynamicTableComponent} from './dynamic-table.component';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AcTableCellComponent} from '../components/table-cell/table-cell.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {NgClass} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";
import {provideRouter} from "@angular/router";
import {signal} from "@angular/core";
import {AcTableOptions} from "../models/table-options";

describe('TableComponent', () => {
  let component: AcDynamicTableComponent;
  let fixture: ComponentFixture<AcDynamicTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, AcDynamicTableComponent, AcTableCellComponent, MatTableModule, MatSortModule, NgClass, MatPaginatorModule],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AcDynamicTableComponent);
    component = fixture.componentInstance;
    const options = signal<AcTableOptions>({caption: 'test'});
    component.options = options as unknown as typeof component.options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
