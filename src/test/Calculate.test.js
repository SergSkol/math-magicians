import calculate from '../logic/calculate';

describe('Test logic of calculate component', () => {
  test('Test AC button', () => {
    const data = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(data, 'AC')).toEqual({
      total: '0',
      next: null,
      operation: null,
    });
  });
  test('Test numeric button', () => {
    const data = {
      total: '0',
      next: null,
    };
    expect(calculate(data, '3')).toEqual({
      total: null,
      next: '3',
    });
  });
  test('Test operation + button', () => {
    const data = {
      total: '3',
      next: '4',
      operation: '+',
    };
    expect(calculate(data, '=')).toEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });
});
