import {Component, inject, OnInit} from "@angular/core";
import {AcDynamicFormModal, AcModalFormButton, AcModalFormResponse} from "../models/dynamic-form-modal";
import {DynamicFormService} from "../services/dynamic-form.service";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AcDynamicFieldDirective} from "../components/dynamic-field.directive";
import {NgClass} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {take} from 'rxjs';
import {AcDynamicButtonComponent} from "../../dynamic-button/dynamic-button.component";
import {AcButton} from "../models/dynamic-form";

@Component({
  selector: "ac-dynamic-form-modal",
  standalone: true,
    imports: [NgClass, ReactiveFormsModule, MatIconModule, MatButtonModule, AcDynamicFieldDirective, MatDialogModule, AcDynamicButtonComponent],
  templateUrl: "./dynamic-form-modal.component.html",
  styleUrls: [],
  providers: [DynamicFormService],
})
export class AcDynamicFormModalComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<AcDynamicFormModalComponent>);
  private dynamicFormService: DynamicFormService = inject(DynamicFormService);
  data: AcDynamicFormModal = inject(MAT_DIALOG_DATA);
  status?: 'OK' | 'ERROR';
  message?: string;

  get form(): FormGroup | undefined {
    return this.dynamicFormService.form;
  }

  constructor() {
    this.dynamicFormService.createForm(
      this.data.fields,
      this.data.validations,
      this.data.updateOn ?? "change",
      this.data.initialObject
    );
  }

  ngOnInit() {
  }

  onClickButton(button: AcModalFormButton) {
    if (button.type === 'reset') {
      this.dialogRef.close();
    }
    if (button.action) {
      button.action(this.form!, this.data.initialObject).pipe(take(1)).subscribe((resp: boolean | AcModalFormResponse) => {
        if (resp === true) {
          this.dialogRef.close();
        } else if (resp) {
          this.message = (resp as AcModalFormResponse).message;
          this.status = (resp as AcModalFormResponse).status;
        }
      });
    }
  }
}
