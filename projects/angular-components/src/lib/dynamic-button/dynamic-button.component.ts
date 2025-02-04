import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal
} from '@angular/core';
import {AcBadgeOptions, AcButtonType, AcMaterialButtonType} from './dynamic-button';
import {MatButtonModule} from '@angular/material/button';
import {MatBadge} from '@angular/material/badge';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'ac-button',
  standalone: true,
  imports: [MatButtonModule, MatBadge, NgClass, MatIcon, MatMenuItem, NgTemplateOutlet],
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcDynamicButtonComponent {

  type: InputSignal<AcButtonType> = input<AcButtonType>('button');
  matType: InputSignal<AcMaterialButtonType | undefined> = input<AcMaterialButtonType>();
  disabled: InputSignal<boolean | undefined> = input<boolean>();
  disableRipple: InputSignal<boolean | undefined> = input<boolean>();
  label: InputSignal<string | undefined> = input<string>();
  className: InputSignal<string | undefined> = input<string>();
  title: InputSignal<string | undefined> = input<string>();
  matIcon: InputSignal<string | undefined> = input<string>();
  badge: InputSignal<string | undefined> = input<string>();
  badgeOptions: InputSignal<AcBadgeOptions | undefined> = input<AcBadgeOptions>();
  ariaLabel: InputSignal<string | undefined> = input<string>();
  buttonMatType: Signal<string> = computed(() => (this.type() === 'link' ? 'link-' : 'button-') + (this.matType() ?? 'basic'));

  buttonClick: OutputEmitterRef<void> = output<void>();

  clickButton(event: MouseEvent) {
    event.stopPropagation();
    this.buttonClick.emit();
  }

}
