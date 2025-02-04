import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {distinctUntilChanged} from 'rxjs';
import {AbstractFieldComponent} from './abstract-field.component';
import {AbstractControlConfig} from '../../models/abstract-control-config';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({standalone: true, template: ''})
export class AbstractControlFieldComponent<T extends AbstractControlConfig> extends AbstractFieldComponent<T> implements OnInit {
  protected destroyRef = inject(DestroyRef);
  uuid!: string;

  ngOnInit(): void {
    this.uuid = 'ac-field-' + this.field.name + '-' + (Math.random() + 1).toString(36).substring(7);
    if (this.field.onValueChanges) {
      const control = this.group.get(this.field.name);
      if (control) {
        this.field.onValueChanges(control.value, this.dynamicFormService.data!, this.group, this.instancePath);
        control.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          this.field.onValueChanges!(value, this.dynamicFormService.data!, this.group, this.instancePath);
        });
      }
    }
  }

}
