export class MyFormat {
  dateInput: string = 'DD/MM/YYYY';

  get display() {
    return {
      dateInput: this.dateInput,
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: this.dateInput,
      monthYearA11yLabel: 'MMM YYYY',
    };
  }

  get parse() {
    return {
      dateInput: this.dateInput,
    };
  }
}
