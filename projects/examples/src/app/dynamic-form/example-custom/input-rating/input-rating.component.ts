import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {
  AcCustomComponentField
} from '../../../../../../angular-components/src/lib/dynamic-form/components/abstract-field/custom-component';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'app-input-rating',
    templateUrl: './input-rating.component.html',
    styleUrls: ['./input-rating.component.scss'],
    imports: [
        MatIcon
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputRatingComponent),
            multi: true
        }
    ]
})
export class InputRatingComponent extends AcCustomComponentField implements OnInit {

  public stars: boolean[] = [];
  public disabled: boolean = false;
  private value: number = 0;

  onChange = (rating: number) => {
  }
  onTouched = () => {
  }

  constructor() {
    super();
  }

  ngOnInit() {
    this.stars = [];
    const max = this.field && this.field.data ? this.field.data.max : 5;
    for (let i = 0; i < max; i++) {
      this.stars.push(i < this.value);
    }
  }

  public rate(rating: number) {
    if (!this.disabled) {
      this.writeValue(rating);
    }
  }

  override writeValue(rating: number): void {
    this.value = rating;
    this.stars = this.stars.map((x, i) => i < rating);
    this.onChange(this.value);
  }

  override registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  override registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
