import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTableExternaldataComponent } from './example-table-externaldata.component';

describe('ExampleTableExternaldataComponent', () => {
  let component: ExampleTableExternaldataComponent;
  let fixture: ComponentFixture<ExampleTableExternaldataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleTableExternaldataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTableExternaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
