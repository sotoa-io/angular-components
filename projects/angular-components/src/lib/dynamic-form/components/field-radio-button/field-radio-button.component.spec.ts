import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AcFieldRadioButtonComponent} from './field-radio-button.component';
import {DynamicFormService} from "../../services/dynamic-form.service";

describe('FieldRadioButtonComponent', () => {
  let component: AcFieldRadioButtonComponent;
  let fixture: ComponentFixture<AcFieldRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcFieldRadioButtonComponent, ReactiveFormsModule, NoopAnimationsModule],
      providers: [DynamicFormService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcFieldRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.field = {type: 'radio', name: 'test', options: []};
    fixture.componentInstance.group = new FormGroup({test: new FormControl('')});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the class "ac-dynamic-field"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').classList).toContain('ac-form-field');
  });

  it('should have the class "form-field-radiobutton"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').classList).toContain('ac-form-field-radiobutton');
  });

});
