import { formatCurrencyMaskToFloat } from '../format.mask';

describe('format.mask', () => {
  test('formatCurrencyMaskToFloat', () => {
    expect(formatCurrencyMaskToFloat('', 2)).toBe(null);
    expect(formatCurrencyMaskToFloat('0004', 2)).toBe(0.04);
    expect(formatCurrencyMaskToFloat('0004', 3)).toBe(0.004);
    expect(formatCurrencyMaskToFloat('USD 4000', 2)).toBe(40.0);

    expect(formatCurrencyMaskToFloat('R$ 1234', 2)).toBe(12.34);
    expect(formatCurrencyMaskToFloat('R$ 12,34', 2)).toBe(12.34);

    expect(formatCurrencyMaskToFloat('R$ 123400', 2)).toBe(1234.0);
    expect(formatCurrencyMaskToFloat('R$ 1234,00', 2)).toBe(1234.0);
    expect(formatCurrencyMaskToFloat('R$ 1234.00', 2)).toBe(1234.0);

    expect(formatCurrencyMaskToFloat('R$ 1234.00', 3)).toBe(123.4);
  });
});
