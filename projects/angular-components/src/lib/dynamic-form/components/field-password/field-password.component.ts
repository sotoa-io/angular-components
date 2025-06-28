import {Component, OnInit} from '@angular/core';
import {AcAffix} from '../../models/affix';
import {AbstractControlFieldComponent} from '../abstract-field/abstract-control-field.component';
import {ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {JsonPipe, NgClass} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {AcDynamicButtonComponent} from "../../../dynamic-button/dynamic-button.component";
import {AcFieldPasswordConfig} from "../../models/field-password-config";
import {PasswordValidators} from "./password-validators";

@Component({
  selector: 'ac-field-password',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, AcDynamicButtonComponent, JsonPipe],
  templateUrl: './field-password.component.html',
  styleUrls: ['./field-password.component.scss'],
})
export class AcFieldPasswordComponent extends AbstractControlFieldComponent<AcFieldPasswordConfig> implements OnInit {
  inputType: string = 'password';
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
  iconErrorLabel?: string;
  iconSuccessLabel?: string;

  buttonAction(b: AcAffix) {
    if (b.action && this.field && this.group) {
      b.action(this.field, this.group, this.dynamicFormService.data!);
    }
  }

  override ngOnInit() {
    super.ngOnInit();
    this.showPasswordLabel = this.field.labels?.showPassword ?? "Show password";
    this.hidePasswordLabel = this.field.labels?.hidePassword ?? "Hide password";
    this.iconSuccessLabel = this.field.labels?.iconSuccess ?? "Success";
    this.iconErrorLabel = this.field.labels?.iconError ?? "Error";
    if (this.control) {
      this.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
        if (value?.length == 0) {
          this.control!.setValue(null);
        }
      });
      this.setPasswordValidators();
    }
  }

  tooglePassword() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

  get minLengthValid() {
    return this.control!.value && !this.control!.hasError("minlength");
  }

  get maxLengthValid() {
    return this.control!.value && !this.control!.hasError("maxlength");
  }

  get requiresDigitValid() {
    return this.control!.value && !this.control!.hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return this.control!.value && !this.control!.hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return this.control!.value && !this.control!.hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return this.control!.value && !this.control!.hasError("requiresSpecialChars");
  }

  private setPasswordValidators() {
    if (this.field.minlength) {
      this.control?.addValidators(Validators.minLength(this.field.minlength));
    }
    if (this.field.maxlength) {
      this.control?.addValidators(Validators.maxLength(this.field.maxlength));
    }
    if (this.field.requiresDigit) {
      this.control?.addValidators(PasswordValidators.patternValidator(/(?=.*[0-9])/, {
        requiresDigit: true
      }))
    }
    if (this.field.requiresUppercase) {
      this.control?.addValidators(PasswordValidators.patternValidator(/(?=.*[A-Z])/, {
        requiresUppercase: true
      }))
    }
    if (this.field.requiresLowercase) {
      this.control?.addValidators(PasswordValidators.patternValidator(/(?=.*[a-z])/, {
        requiresLowercase: true
      }))
    }
    if (this.field.requiresSpecialChars) {
      const chars = this.field.specialChars?.join("") ?? "$@^!%*?&";
      const regex = "(?=.*[" + chars + "])";
      this.control?.addValidators(PasswordValidators.patternValidator(new RegExp(regex), {
        requiresSpecialChars: true
      }))
    }
  }
}
