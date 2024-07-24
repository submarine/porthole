import { Province } from './Province';

export class Country {

  constructor(data) {
    this.cursor = data?.cursor;
    this.data = data?.node || data;
  }

  get cityLabel() {
    return this.data.cityLabel;
  }

  get code() {
    return this.data.code;
  }

  get emojiFlag() {
    return this.data.emojiFlag;
  }

  get internationalPhoneCode() {
    return this.data.internationalPhoneCode;
  }

  get name() {
    return this.data.name;
  }

  get presentProvinces() {
    return this.data.presentProvinces;
  }

  get presentableProvinces() {
    if (!this.data.presentableProvinces) return [];

    return this.data.presentableProvinces.map((province) => new Province(province));
  }

  get postcodeLabel() {
    return this.data.postcodeLabel;
  }

  get provinceLabel() {
    return this.data.provinceLabel;
  }

}
