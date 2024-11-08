import {Routes} from '@angular/router';
import {ExampleDynamicFormComponent} from './dynamic-form/example-dynamic-form/example-dynamic-form.component';
import {ExampleInputComponent} from './dynamic-form/example-input/example-input.component';
import {ExampleSelectComponent} from './dynamic-form/example-select/example-select.component';
import {ExampleAutocompleteComponent} from './dynamic-form/example-autocomplete/example-autocomplete.component';
import {ExampleTextareaComponent} from './dynamic-form/example-textarea/example-textarea.component';
import {ExampleDateComponent} from './dynamic-form/example-date/example-date.component';
import {ExampleCheckboxComponent} from './dynamic-form/example-checkbox/example-checkbox.component';
import {ExampleRadiobuttonComponent} from './dynamic-form/example-radiobutton/example-radiobutton.component';
import {ExampleToggleComponent} from './dynamic-form/example-toggle/example-toggle.component';
import {ExampleFileComponent} from './dynamic-form/example-file/example-file.component';
import {ExampleCustomComponent} from './dynamic-form/example-custom/example-custom.component';
import {
  ExampleDynamicFormModalComponent
} from './dynamic-form/example-dynamic-form-modal/example-dynamic-form-modal.component';
import {
  ExampleDynamicFormStepperComponent
} from './dynamic-form/example-dynamic-form-stepper/example-dynamic-form-stepper.component';
import {TestComponent} from "./dynamic-form/test/test.component";
import {ExampleTableComponent} from "./dynamique-table/example-table/example-table.component";
import {
  ExampleTableExternaldataComponent
} from "./dynamique-table/example-table-externaldata/example-table-externaldata.component";
import {ExamplesButtonComponent} from "./dynamique-button/examples-button/examples-button.component";

export const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'buttons',
    component: ExamplesButtonComponent,
  },
  {
    path: 'dynamic-table',
    component: ExampleTableComponent,
  },
  {
    path: 'dynamic-table-external-data',
    component: ExampleTableExternaldataComponent,
  },
  {
    path: 'dynamic-form',
    component: ExampleDynamicFormComponent,
  },
  {
    path: 'dynamic-form-modal',
    component: ExampleDynamicFormModalComponent,
  },
  {
    path: 'dynamic-form-stepper',
    component: ExampleDynamicFormStepperComponent,
  },
  {
    path: 'input',
    component: ExampleInputComponent,
  },
  {
    path: 'select',
    component: ExampleSelectComponent,
  },
  {
    path: 'date',
    component: ExampleDateComponent,
  },
  {
    path: 'textarea',
    component: ExampleTextareaComponent,
  },
  {
    path: 'autocomplete',
    component: ExampleAutocompleteComponent,
  },
  {
    path: 'checkbox',
    component: ExampleCheckboxComponent,
  },
  {
    path: 'radio',
    component: ExampleRadiobuttonComponent,
  },
  {
    path: 'toggle',
    component: ExampleToggleComponent,
  },
  {
    path: 'file',
    component: ExampleFileComponent,
  },
  {
    path: 'custom',
    component: ExampleCustomComponent,
  },
];
