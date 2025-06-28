import {ComponentFixture, TestBed, waitForAsync} from "@angular/core/testing";

import {AcFieldInputComponent} from "./field-password.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AutocompleteAttribute} from '../../models/autocomplete-attribute';
import {DynamicFormService} from "../../services/dynamic-form.service";

describe("FieldInputComponent", () => {
  let component: AcFieldInputComponent;
  let fixture: ComponentFixture<AcFieldInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldInputComponent, ReactiveFormsModule, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldInputComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.field = {type: "input", name: "inputName"};
    fixture.componentInstance.group = new FormGroup({
      inputName: new FormControl(""),
    });
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have the input type defined by field.inputType", () => {
    fixture.componentInstance.field!.inputType = "number";
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("input").type
    ).toEqual("number");
  });

  it("should have maxlength at -1", () => {
    expect(
      fixture.debugElement.nativeElement.querySelector("input").maxLength
    ).toEqual(-1);
  });

  it("should have maxlength defined by field.maxlength", () => {
    fixture.componentInstance.field!.maxlength = 20;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("input").maxLength
    ).toEqual(20);
  });

  it("should have autocomplete defined by field.autocomplete", () => {
    fixture.componentInstance.field!.autocomplete = AutocompleteAttribute.Off;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("input").autocomplete
    ).toEqual("off");
  });

  it("should have readonly defined by field.readonly", () => {
    fixture.componentInstance.field!.readonly = true;
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("input").readOnly
    ).toEqual(true);
  });

  it("should have the label defined by field.label", () => {
    fixture.componentInstance.field!.label = "labelTest";
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("label")
    ).toBeTruthy();
    expect(
      fixture.debugElement.nativeElement
        .querySelector("label")
        .textContent.trim()
    ).toEqual("labelTest");
  });

  it("should have the input name defined field.name", () => {
    const el = fixture.debugElement.nativeElement;
    const myField = el.querySelector("input[ng-reflect-name=inputName]");
    expect(myField).toBeTruthy();
  });

  it("should have the placeholder defined by field.placeholder", () => {
    fixture.componentInstance.field!.placeholder = "placeholderTest";
    fixture.detectChanges();
    expect(
      fixture.debugElement.nativeElement.querySelector("input").placeholder
    ).toEqual("placeholderTest");
  });

  describe("onValueChanges", () => {
    it("is called if the value changes", waitForAsync(() => {
      fixture.componentInstance.field!.onValueChanges = () => {
      };
      spyOn(fixture.componentInstance.field as any, "onValueChanges");
      fixture.componentInstance.ngOnInit();
      const group: FormGroup = fixture.componentInstance.group!;

      group.get(fixture.componentInstance.field!.name)!.setValue("test");
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(
          fixture.componentInstance.field!.onValueChanges
        ).toHaveBeenCalled();
      });
    }));
  });
});
