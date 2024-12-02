module.exports = class Calculator {
  value;

  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  add(number) {
    this.value = this.value + number;

    return this;
  }

  minus(number) {
    this.value = this.value - number;

    return this;
  }

  divide(number) {
    this.value = this.value / number;

    return this;
  }

  times(number) {
    this.value = this.value * number;

    return this;
  }

  sqrt() {
    if (this.value < 0) {
      throw new Error('Current value most be non-negative number.');
    }

    this.value = Math.sqrt(this.value);

    return this;
  }

  modulo(number) {
    this.value = this.value / number; // wrong implementation by design to be caught by unit test

    return this;
  }
};
