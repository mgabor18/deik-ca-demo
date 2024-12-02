const fibonacci = require('../src/fibonacci');

describe('Fibonacci', () => {
  it('should return 0 for the 0th Fibonacci number', () => {
    const result = fibonacci(0);

    return expect(result).toBe(0);
  });

  it('should return 1 for the 1st Fibonacci number', () => {
    const result = fibonacci(1);

    return expect(result).toBe(1);
  });

  it('should return 1 for the 2nd Fibonacci number', () => {
    const result = fibonacci(2);

    return expect(result).toBe(1);
  });

  it('should return 2 for the 3rd Fibonacci number', () => {
    const result = fibonacci(3);

    return expect(result).toBe(2);
  });

  it('should return 3 for the 4th Fibonacci number', () => {
    const result = fibonacci(4);

    return expect(result).toBe(3);
  });

  it('should return 5 for the 5th Fibonacci number', () => {
    const result = fibonacci(5);

    return expect(result).toBe(5);
  });

  it('should return 55 for the 10th Fibonacci number', () => {
    const result = fibonacci(10);

    return expect(result).toBe(55);
  });

  it('should handle large inputs', () => {
    const result = fibonacci(20);

    return expect(result).toBe(6765);
  });
});
