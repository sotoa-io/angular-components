import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {AcFieldCheckboxComponent} from "./field-checkbox.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {DynamicFormService} from "../../services/dynamic-form.service";

describe("AcFieldCheckboxComponent", () => {
  let component: AcFieldCheckboxComponent;
  let fixture: ComponentFixture<AcFieldCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldCheckboxComponent, ReactiveFormsModule, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldCheckboxComponent);
    component = fixture.componentInstance;
    component.field = {
      type: "checkbox",
      name: "test",
      className: "lib-dynamic-field"
    };
    component.group = new FormGroup({
      test: new FormControl("")
    });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have the class \"ac-form-field-checkbox\"", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("div").classList).toContain("ac-form-field-checkbox");
  });

  it("should have the label defined by field.label", () => {
    component.field!.label = "labelTest";
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector("label")).toBeTruthy();
    expect(fixture.debugElement.nativeElement.querySelector("label").textContent).toContain("labelTest");
  });

  it("onValueChanges is called if the value changes", waitForAsync(() => {
    component.field!.onValueChanges = () => {
    };
    spyOn(component.field as any, "onValueChanges");
    component.ngOnInit();
    component.group!.get(component.field!.name)!.setValue(true);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.field!.onValueChanges).toHaveBeenCalled();
    });
  }));
});
