import { parsePhoneNumber } from 'libphonenumber-js';

export class PhoneNumber {

  constructor(data, defaultCountryCode = 'AU') {
    this.data = data || '';
    this.defaultCountryCode = defaultCountryCode;
    this.parseAttemped = false;
    this.parser = null;
  }

  get countryCode() {
    return this.parsedCountryCode || this.defaultCountryCode;
  }

  get countryCallingCode() {
    if (this.isValid) return this.parser.countryCallingCode;

    return null;
  }

  get formValue() {
    if (this.isValid) return this.formattedNumber;

    return this.rawNumber;
  }

  get formattedNumber() {
    if (this.isValid) return this.parser.number;

    return '';
  }

  get isValid() {
    if (!this.parsedNumber) return false;

    return this.parsedNumber.isValid();
  }

  get parsedCountryCode() {
    if (this.isValid) return this.parsedNumber.country;

    return null;
  }

  get isParsed() {
    return this.parseAttemped;
  }

  get parsedNumber() {
    if (this.parseAttemped) return this.parser;

    this.parseAttemped = true;

    try {
      this.parser = parsePhoneNumber(this.rawNumber, this.countryCode);
    } catch {
      // Do nothing.
    }

    return this.parser;
  }

  get rawNumber() {
    return this.data;
  }

}
