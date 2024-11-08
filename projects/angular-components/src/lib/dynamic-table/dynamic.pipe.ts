import {inject, Injector, Pipe, PipeTransform, Type} from '@angular/core';

@Pipe({
  name: 'dynamicPipe',
  standalone: true,
})
export class DynamicPipe implements PipeTransform {
  private injector: Injector = inject(Injector);

  transform(value: unknown, pipeToken: Type<PipeTransform>, ...args: unknown[]): unknown {
    if (!pipeToken) {
      return value;
    } else {
      const pipe = this.injector.get<PipeTransform>(pipeToken);
      return pipe.transform(value, ...args);
    }
  }
}
