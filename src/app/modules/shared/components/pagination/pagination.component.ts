import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

import {Pagination} from '../../domain/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pagination: Pagination = new Pagination();
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.pagination);
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

}
