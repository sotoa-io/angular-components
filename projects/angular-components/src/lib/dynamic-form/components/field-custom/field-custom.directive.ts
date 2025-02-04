import {
  ComponentRef,
  Directive,
  EnvironmentInjector,
  EventEmitter,
  Host,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SkipSelf,
  ViewContainerRef,
} from '@angular/core';
import {AsyncValidatorFn, ControlContainer, FormControl, FormGroup, NgControl, ValidatorFn} from '@angular/forms';
import {AcFieldCustomConfig} from '../../models/field-custom-config';
import {AcCustomComponentField} from '../abstract-field/custom-component';

@Directive({
  selector: '[fieldCustom]',
  standalone: true,
})
export class AcFieldCustomDirective extends NgControl implements OnChanges, OnInit, OnDestroy {
  private container: ViewContainerRef = inject(ViewContainerRef);
  private injector: EnvironmentInjector = inject(EnvironmentInjector);
  field: InputSignal<AcFieldCustomConfig<any>> = input.required<AcFieldCustomConfig<any>>();
  group: InputSignal<FormGroup> = input.required<FormGroup>();

  component: ComponentRef<AcCustomComponentField> | undefined;

  // tslint:disable-next-line:no-output-rename
  @Output('ngModelChange') update = new EventEmitter();

  pcontrol!: FormControl;

  constructor(
    @Optional() @Host() @SkipSelf() private parent: ControlContainer,
  ) {
    super();
  }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.field = this.field();
      this.component.instance.group = this.group();
    }
  }

  ngOnInit() {
    if (!this.field().component) {
      throw new Error(`Trying to use an empty component`);
    }
    this.name = this.field().name;
    this.container.clear();
    this.component = this.container.createComponent(this.field().component, {
      environmentInjector: this.injector
    });
    this.valueAccessor = this.component.instance;
    this.component.instance.field = this.field();
    this.component.instance.group = this.group();
    if (this.formDirective) {
      this.pcontrol = this.formDirective.addControl(this);
    }
  }

  override get path(): string[] {
    // @ts-ignore
    return [...this.parent.path, this.name];
  }

  get formDirective(): any {
    return this.parent ? this.parent.formDirective : null;
  }


  get control(): FormControl {
    return this.pcontrol;
  }


  override get validator(): ValidatorFn | null {
    return null;
  }

  override get asyncValidator(): AsyncValidatorFn | null {
    return null;
  }

  viewToModelUpdate(newValue: any): void {
    this.update.emit(newValue);
  }

  ngOnDestroy(): void {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
    if (this.component) {
      this.component.destroy();
    }
  }
}
