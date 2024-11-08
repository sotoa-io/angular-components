import {AcFieldInputConfig} from './field-input-config';
import {AcFieldCheckboxConfig} from './field-checkbox-config';
import {AcFieldSelectConfig} from './field-select-config';
import {AcFieldAutocompleteConfig} from './field-autocomplete-config';
import {AcFieldRadioButtonConfig} from './field-radio-button-config';
import {AcFieldTextareaConfig} from './field-textarea-config';
import {AcFieldCustomConfig} from './field-custom-config';
import {AcFieldDateConfig} from './field-date-config';
import {AcFieldFileConfig} from './field-file-config';
import {AcFieldEditorConfig} from './field-editor-config';
import {AcFieldToggleConfig} from './field-toggle-config';

export type AcControlConfig =
  | AcFieldCheckboxConfig
  | AcFieldInputConfig
  | AcFieldDateConfig
  | AcFieldTextareaConfig
  | AcFieldSelectConfig
  | AcFieldAutocompleteConfig
  | AcFieldRadioButtonConfig
  | AcFieldFileConfig
  | AcFieldEditorConfig
  | AcFieldToggleConfig
  | AcFieldCustomConfig<any>;
