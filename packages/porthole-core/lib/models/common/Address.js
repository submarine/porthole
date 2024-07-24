import addressFormatter from '@fragaria/address-formatter';

import { Country } from './Country';
import { PhoneNumber } from './PhoneNumber';
import { Province } from './Province';

export class Address {

  constructor(data) {
    this.data = data;
  }

  get city() {
    return this.data.city;
  }

  get country() {
    return new Country(this.data.country);
  }

  get countryCode() {
    return this.data.country.code;
  }

  get firstName() {
    return this.data.firstName || '';
  }

  get fullName() {
    return [this.firstName, this.lastName].join(' ');
  }

  get lastName() {
    return this.data.lastName || '';
  }

  get phone() {
    return new PhoneNumber(this.data.phone, this.country.code);
  }

  get postcode() {
    return this.data.postcode;
  }

  get province() {
    return new Province(this.data.province);
  }

  get provinceCode() {
    return this.data.province.code;
  }

  get street1() {
    return this.data.street1;
  }

  get street2() {
    return this.data.street2 || '';
  }

  parse() {
    return addressFormatter.format(
      {
        road: this.street1,
        neighbourhood: this.street2,
        city: this.city,
        postcode: this.postcode,
        county: null,
        state: this.provinceCode,
        countryCode: this.countryCode
      },
      { appendCountry: true, output: 'array' }
    );
  }

}
