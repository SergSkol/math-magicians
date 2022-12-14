import operate from '../logic/operate';

describe('Test logic of operate component', () => {
  test('Test +', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('Test -', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });
  test('Test x', () => {
    expect(operate(3, 2, 'x')).toBe('6');
  });
  test('Test ÷', () => {
    expect(operate(8, 2, '÷')).toBe('4');
  });
  test('Test %', () => {
    expect(operate(7, 2, '%')).toBe('1');
  });
});
