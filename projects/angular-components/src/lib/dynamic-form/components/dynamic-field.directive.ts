import {
  ComponentRef,
  Directive,
  EnvironmentInjector, inject,
  input,
  InputSignal,
  OnChanges,
  SimpleChanges,
  Type,
  ViewContainerRef
} from "@angular/core";
import {AcFieldCheckboxComponent} from "./field-checkbox/field-checkbox.component";
import {AcField} from "../models/field";
import {AcFieldInputComponent} from "./field-input/field-input.component";
import {FormGroup} from "@angular/forms";
import {AcFieldSelectComponent} from "./field-select/field-select.component";
import {AcTextConfig} from "../models/text-config";
import {AcGroupComponent} from "./group/group.component";
import {AcDivTextComponent} from "./div-text/div-text.component";
import {AcFieldAutocompleteComponent} from "./field-autocomplete/field-autocomplete.component";
import {AcFieldConfig} from "../models/field-config";
import {AcArrayComponent} from "./array/array.component";
import {AcFieldRadioButtonComponent} from "./field-radio-button/field-radio-button.component";
import {AcRowComponent} from "./row/row.component";
import {AcFieldTextareaComponent} from "./field-textarea/field-textarea.component";
import {AcFieldCustomComponent} from "./field-custom/field-custom.component";
import {AcTabsComponent} from "./tabs/tabs.component";
import {AcFieldDateComponent} from "./field-date/field-date.component";
import {AcFieldFileComponent} from "./field-file/field-file.component";
import {AcFieldToggleComponent} from "./field-toggle/field-toggle.component";

const components: { [type: string]: Type<AcField> } = {
  group: AcGroupComponent,
  array: AcArrayComponent,
  row: AcRowComponent,
  text: AcDivTextComponent,
  checkbox: AcFieldCheckboxComponent,
  input: AcFieldInputComponent,
  date: AcFieldDateComponent,
  textarea: AcFieldTextareaComponent,
  select: AcFieldSelectComponent,
  autocomplete: AcFieldAutocompleteComponent,
  radio: AcFieldRadioButtonComponent,
  customField: AcFieldCustomComponent,
  tabs: AcTabsComponent,
  file: AcFieldFileComponent,
  toggle: AcFieldToggleComponent
};

@Directive({
  selector: "[acDynamicField]",
  standalone: true
})
export class AcDynamicFieldDirective implements OnChanges {
  private container: ViewContainerRef = inject(ViewContainerRef);
  private injector: EnvironmentInjector = inject(EnvironmentInjector);
  type: InputSignal<string> = input.required<string>();
  path: InputSignal<string> = input.required<string>();
  field: InputSignal<AcFieldConfig | AcTextConfig> = input.required<AcFieldConfig | AcTextConfig>();
  group: InputSignal<FormGroup> = input.required<FormGroup>();
  instancePath: InputSignal<string | undefined> = input<string>();

  component: ComponentRef<AcField> | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (!components[this.field().type]) {
      const supportedTypes = Object.keys(components).join(", ");
      throw new Error(
        `Trying to use an unsupported type (${this.field().type}).
          Supported types: ${supportedTypes}`
      );
    } else {
      if (!this.component || changes["type"]) {
        this.container.clear();
        this.component = this.container.createComponent(components[this.field().type], {
          environmentInjector: this.injector
        });
      }
      this.component.instance.field = this.field();
      this.component.instance.group = this.group();
      this.component.instance.instancePath = this.instancePath();
      this.component.instance.path = this.path();
    }
  }

}
