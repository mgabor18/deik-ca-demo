const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator(3);
  });

  it('should be able to give back the current value', () => {
    const result = calc.getValue();

    return expect(result).toBe(3);
  });

  it('should be able to add a number to the current value', () => {
    const result = calc.add(3).getValue();

    return expect(result).toBe(6);
  });

  it('should be able to subtract a number from the current value', () => {
    const result = calc.minus(2).getValue();

    return expect(result).toBe(1);
  });

  it('should be able to multiply the current value with a number', () => {
    const result = calc.times(10).getValue();

    return expect(result).toBe(30);
  });

  it('should be able to divide the current value with a number', () => {
    const result = calc.divide(3).getValue();

    return expect(result).toBe(1);
  });

  it('should be able to get the modulo of the current value', () => {
    const result = calc.modulo(3).getValue();

    return expect(result).toBe(0);
  });

  it('should be able to chain commands', () => {
    const result = calc.add(3).times(8).divide(4).getValue();

    return expect(result).toBe(12);
  });
});
