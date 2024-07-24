export class Province {

  constructor(data) {
    this.data = data;
  }

  get code() {
    return this.data.code || '';
  }

  get name() {
    return this.data.name || '';
  }

}
