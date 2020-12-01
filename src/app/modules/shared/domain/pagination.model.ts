export class Pagination {
  pageSize = 20;
  currentPage = 0;
  maxPage = 0;
  totalElements = 0;

  constructor(props = {}) {
    Object.assign(this, props);
    this.maxPage = this.calculateMaxPage(this.totalElements, this.pageSize);
  }

  calculateMaxPage(totalElements, pageSize) {
    return Math.ceil(totalElements / pageSize);
  }

  pageList() {
    if (this.maxPage) {
      return Array.from(Array(this.maxPage).keys());
    }
  }
}
