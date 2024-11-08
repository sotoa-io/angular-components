import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class MatPaginatorIntlFr extends MatPaginatorIntl {
  override firstPageLabel = 'Première page';
  override lastPageLabel = 'Dernière page';

  override nextPageLabel = 'Page suivante';
  override previousPageLabel = 'Page précédente';

  override itemsPerPageLabel = 'Eléments par page : ';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 sur ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize < length ? startIndex + pageSize : length;
    return startIndex + 1 + ' - ' + endIndex + ' sur ' + length;
  };
}
