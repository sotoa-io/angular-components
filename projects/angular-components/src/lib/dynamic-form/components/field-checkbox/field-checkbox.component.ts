import { Component } from '@angular/core';
import { AcFieldCheckboxConfig } from '../../models/field-checkbox-config';
import { AbstractControlFieldComponent } from '../abstract-field/abstract-control-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'ac-field-checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, MatCheckboxModule, MatError],
  templateUrl: './field-checkbox.component.html',
  styleUrls: ['./field-checkbox.component.scss'],
})
export class AcFieldCheckboxComponent extends AbstractControlFieldComponent<AcFieldCheckboxConfig> {}
