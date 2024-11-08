import { Component } from "@angular/core";
import { AcFieldCustomConfig } from "../../models/field-custom-config";
import { AcFieldCustomDirective } from "./field-custom.directive";
import { AbstractControlFieldComponent } from "../abstract-field/abstract-control-field.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: "ac-field-custom",
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, AcFieldCustomDirective],
  templateUrl: "./field-custom.component.html",
  styleUrls: ["./field-custom.component.scss"]
})
export class AcFieldCustomComponent extends AbstractControlFieldComponent<AcFieldCustomConfig<any>> {
}
