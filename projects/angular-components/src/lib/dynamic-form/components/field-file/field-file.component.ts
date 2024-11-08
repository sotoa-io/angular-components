import { Component } from '@angular/core';
import { AcFieldFileConfig } from '../../models/field-file-config';
import { AcInputFileComponent } from '../input-file/input-file.component';
import { AbstractControlFieldComponent } from '../abstract-field/abstract-control-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'ac-field-file',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AcInputFileComponent, MatError],
  templateUrl: './field-file.component.html',
  styleUrls: ['./field-file.component.scss'],
})
export class AcFieldFileComponent extends AbstractControlFieldComponent<AcFieldFileConfig> {}
