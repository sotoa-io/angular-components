import {
  Component,
  DestroyRef,
  ElementRef,
  forwardRef,
  inject,
  input,
  InputSignal,
  OnInit,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {AcFieldFileConfig} from '../../models/field-file-config';
import {NgClass} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'ac-input-file',
    imports: [ReactiveFormsModule, NgClass, MatButtonModule, MatIconModule],
    templateUrl: './input-file.component.html',
    styleUrls: ['./input-file.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => AcInputFileComponent),
        },
    ]
})
export class AcInputFileComponent implements OnInit, ControlValueAccessor {
  private destroyRef = inject(DestroyRef);
  field: InputSignal<AcFieldFileConfig> = input.required<AcFieldFileConfig>();
  group: InputSignal<FormGroup> = input.required<FormGroup>();
  @ViewChild('fileInput')
  fileInput?: ElementRef;
  fileList: File[] = [];
  fichier?: File | null = null;
  public disabled: boolean = false;
  public value: any[] | null = null;

  onChange = (value: any[] | null) => {
  };
  onTouched = () => {
  };

  constructor() {
  }

  ngOnInit(): void {
    if (this.group().get(this.field().name)?.value) {
      this.fileList = this.group().get(this.field().name)?.value;
    }
    // @ts-ignore
    this.group()
      .get(this.field().name)
      .valueChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value1) => {
        if (JSON.stringify(value1) !== JSON.stringify(this.fileList)) {
          this.fileList = value1;
        }
      });
  }

  writeValue(value: any): void {
    this.value = value && (!this.field().multiple || value.length > 0) ? value : null;
    this.onChange(this.value);
  }

  registerOnChange(fn: (value: any[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onSelectFile(event: any) {
    if (event && event.target && event.target.files && event.target.files.length > 0) {
      this.fichier = event.target.files[0];
    } else if (this.fileInput && this.fileInput.nativeElement) {
      this.fichier = null;
      this.fileInput.nativeElement.value = null;
    }
    if (!this.field().multiple) {
      this.writeValue(this.fichier);
    }
  }

  addFile() {
    if (this.fichier) {
      if (!this.fileList) {
        this.fileList = [];
      }
      this.fileList.push(this.fichier);
      if (this.field().onAddFile) {
        this.field().onAddFile!(this.fichier);
      }
      this.fichier = null;
      if (this.fileInput && this.fileInput.nativeElement) {
        this.fileInput.nativeElement.value = null;
      }
    }
    this.writeValue(this.fileList);
  }

  deleteFile(pj: any) {
    this.fileList.splice(this.fileList.indexOf(pj), 1);
    this.writeValue(this.fileList);
    if (this.field().onDeleteFile) {
      this.field().onDeleteFile!(pj);
    }
  }
}
