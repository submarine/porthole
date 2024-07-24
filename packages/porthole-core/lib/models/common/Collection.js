class Collection {

  constructor(data) {
    if (data) {
      this.pageInfo = data.pageInfo;
      this.totalCount = data.totalCount;
    } else {
      this.pageInfo = {};
      this.totalCount = 0;
    }
  }

  get endCursor() {
    return this.pageInfo.endCursor;
  }

  get hasNextPage() {
    if (this.totalCount === 0) return false;

    return this.pageInfo.hasNextPage;
  }

  get hasPreviousPage() {
    if (this.totalCount === 0) return false;

    return this.pageInfo.hasPreviousPage;
  }

  get isEmpty() {
    return this.totalCount === 0;
  }

  get startCursor() {
    return this.pageInfo.startCursor;
  }

}

export default Collection;
