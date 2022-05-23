import { isValidCPF } from '../validate';

describe('Validate', () => {
  test('isValidCPF', () => {
    expect(isValidCPF('000.000.000-00')).toBe(false);
    expect(isValidCPF('111.111.111-11')).toBe(false);
    expect(isValidCPF('222.222.222-22')).toBe(false);

    expect(isValidCPF('383.049.630-35')).toBe(true);
    expect(isValidCPF('383.049.630-99')).toBe(false);

    expect(isValidCPF('873.551.890-18')).toBe(true);
    expect(isValidCPF('773.551.890-18')).toBe(false);
  });
});
