import { Sort } from "@angular/material/sort";
import { PageEvent } from "@angular/material/paginator";

export interface Pagination {
  page: PageEvent;
  sort: Sort;
  pageSizeOptions?: number[];
}
