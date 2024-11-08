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
import {AcBadgeOptions, AcDynamicButtonType} from './dynamic-button';
import {ThemePalette} from '@angular/material/core';
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

  type: InputSignal<'submit' | 'reset' | 'button'> = input<'submit' | 'reset' | 'button'>('button');
  matType: InputSignal<AcDynamicButtonType | undefined> = input<AcDynamicButtonType>();
  link: InputSignal<boolean | undefined> = input<boolean>();
  disabled: InputSignal<boolean | undefined> = input<boolean>();
  disableRipple: InputSignal<boolean | undefined> = input<boolean>();
  label: InputSignal<string | undefined> = input<string>();
  className: InputSignal<string | undefined> = input<string>();
  title: InputSignal<string | undefined> = input<string>();
  matIcon: InputSignal<string | undefined> = input<string>();
  badge: InputSignal<string | undefined> = input<string>();
  badgeOptions: InputSignal<AcBadgeOptions | undefined> = input<AcBadgeOptions>();
  color: InputSignal<ThemePalette | undefined> = input<ThemePalette>();
  ariaLabel: InputSignal<string | undefined> = input<string>();
  buttonMatType: Signal<string> = computed(() => (this.link() ? 'link-' : 'button-') + (this.matType() ?? 'basic'));

  buttonClick: OutputEmitterRef<void> = output<void>();

  clickButton(event: MouseEvent) {
    event.stopPropagation();
    this.buttonClick.emit();
  }

}
