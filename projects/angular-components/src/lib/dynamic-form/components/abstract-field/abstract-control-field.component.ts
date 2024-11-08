import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {distinctUntilChanged} from 'rxjs';
import {AbstractFieldComponent} from './abstract-field.component';
import {AbstractControlConfig} from '../../models/abstract-control-config';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({standalone: true, template: ''})
export class AbstractControlFieldComponent<T extends AbstractControlConfig> extends AbstractFieldComponent<T> implements OnInit {
  protected destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    if (this.field.name && this.field.onValueChanges) {
      const control = this.group.get(this.field.name);
      if (control) {
        this.field.onValueChanges!(control.value, this.dynamicFormService.pathFieldMap, this.group, this.instancePath);
        control.valueChanges.pipe(distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
          // @ts-ignore
          this.field.onValueChanges(value, this.formFieldMap, this.group, this.instancePath);
        });
      }
    }
  }

}
