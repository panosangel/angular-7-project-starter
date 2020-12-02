import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Pagination} from '../../domain/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pagination: Pagination = new Pagination();
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  hasNextPage() {
    return this.pagination.currentPage + 1 < this.pagination.maxPage;
  }

  hasPreviousPage() {
    return this.pagination.currentPage > 0;
  }

  buttonClicked(page: number) {
    this.pageChanged.emit(page);
  }

  nextClicked() {
    this.pageChanged.emit(this.pagination.currentPage + 1);
  }

  previousClicked() {
    this.pageChanged.emit(this.pagination.currentPage - 1);
  }

}
