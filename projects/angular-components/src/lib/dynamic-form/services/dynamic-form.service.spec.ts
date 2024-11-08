import { TestBed, waitForAsync } from "@angular/core/testing";

import { DynamicFormService } from "./dynamic-form.service";
import { ReactiveFormsModule } from "@angular/forms";

describe("DynamicFormService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [DynamicFormService]
    })
  );

  it("should be created", () => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    expect(service).toBeTruthy();
  });

  it("createGroup calls createControl", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "createControl").and.callThrough();
    service.createGroup([{ type: "input", name: "test2" }], null, "change", {}, null, null);
    expect(service.createControl).toHaveBeenCalled();
  }));

  /*
  it("updateForm calls removeItems", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "removeItems");
    service.createForm([], undefined, "change", {});

    service.updateForm([]);
    expect(service.removeItems).toHaveBeenCalled();
  }));

  it("updateForm calls addItems", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "addItems");
    service.createForm([], "change", {});
    service.updateForm([]);
    expect(service.addItems).toHaveBeenCalled();
  }));

  it("updateForm calls updateItems", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "updateItems");
    service.createForm([], "change", {});
    service.updateForm([]);
    expect(service.updateItems).toHaveBeenCalled();
  }));

  it("addItems calls createControl", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "createControl").and.callThrough();
    const form: FormGroup = new FormGroup({ test: new FormControl("") });
    service.addItems(form, [{ type: "input", name: "test2" }]);
    expect(service.createControl).toHaveBeenCalled();
  }));

  it("addItems add a field to the form", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    const form: FormGroup = new FormGroup({ test: new FormControl("") });
    service.addItems(form, [{ type: "input", name: "test2" }]);
    expect(form.controls["test"]).toBeTruthy();
    expect(form.controls["test2"]).toBeTruthy();
  }));

  it("removeItems remove a field from the form", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    const form: FormGroup = new FormGroup({
      test: new FormControl(""),
      test2: new FormControl(""),
    });
    expect(form.controls["test"]).toBeTruthy();
    expect(form.controls["test2"]).toBeTruthy();
    service.removeItems(form, [{ type: "input", name: "test2" }]);
    expect(form.controls["test"]).toBeFalsy();
    expect(form.controls["test2"]).toBeTruthy();
  }));

  it("updateItems disables field", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "updateGroup");
    const form: FormGroup = new FormGroup({ test: new FormControl("") });
    expect(form.controls["test"].enabled).toBeTrue();
    service.updateItems(form, [
      { type: "input", name: "test", disabled: true },
    ]);
    expect(form.controls["test"].enabled).toBeFalse();
  }));

  it("updateItems enables field", waitForAsync(() => {
    const service: DynamicFormService = TestBed.inject(DynamicFormService);
    spyOn(service, "updateGroup");
    const form: FormGroup = new FormGroup({
      test: new FormControl({ value: "", disabled: true }),
    });
    expect(form.controls["test"].enabled).toBeFalse();
    service.updateItems(form, [
      { type: "input", name: "test", disabled: false },
    ]);
    expect(form.controls["test"].enabled).toBeTrue();
  }));

   */
});
