import {ComponentFixture, TestBed} from "@angular/core/testing";

import {AcFieldSelectComponent} from "./field-select.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {DynamicFormService} from "../../services/dynamic-form.service";

describe("FieldSelectComponent", () => {
  let component: AcFieldSelectComponent;
  let fixture: ComponentFixture<AcFieldSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldSelectComponent, ReactiveFormsModule, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.field = {
      type: "select",
      name: "test",
      options: [],
    };
    fixture.componentInstance.group = new FormGroup({
      test: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
