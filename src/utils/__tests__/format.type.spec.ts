import {
  fyFormatTypeInteger,
  fyFormatTypeString,
  fyFormatTypeStringWithoutSpacesOrNull,
  fyFormatTypeJsonToObject,
  fyFormatTypeOnlyNumbers,
  fyFormatTypeValueToFloat,
} from '../';

describe('Test formaters', () => {
  it('fyFormatTypeInteger', function () {
    expect(fyFormatTypeInteger(9)).toBe(9);
    expect(fyFormatTypeInteger('9')).toBe(9);
    expect(fyFormatTypeInteger('9.99')).toBe(9);

    expect(fyFormatTypeInteger(-9)).toBe(-9);
    expect(fyFormatTypeInteger('-9')).toBe(-9);
    expect(fyFormatTypeInteger('-9.99')).toBe(-9);

    expect(fyFormatTypeInteger('0')).toBe(0);
    expect(fyFormatTypeInteger(0)).toBe(0);

    expect(fyFormatTypeInteger('009')).toBe(9);
  });

  it('fyFormatTypeString', function () {
    expect(fyFormatTypeString(9)).toBe('9');
    expect(fyFormatTypeString('9')).toBe('9');
    expect(fyFormatTypeString(null)).toBe('');
    expect(fyFormatTypeString(undefined)).toBe('');
    expect(fyFormatTypeString([])).toBe('');
    expect(fyFormatTypeString({})).toBe('');
    expect(fyFormatTypeString()).toBe('');
    expect(fyFormatTypeString('teste')).toBe('teste');
  });

  it('fyFormatTypeOnlyNumbers', function () {
    expect(fyFormatTypeOnlyNumbers(9)).toBe('9');
    expect(fyFormatTypeOnlyNumbers('9')).toBe('9');
    expect(fyFormatTypeOnlyNumbers(null)).toBe('0');
    expect(fyFormatTypeOnlyNumbers(undefined)).toBe('0');
    expect(fyFormatTypeOnlyNumbers([])).toBe('0');
    expect(fyFormatTypeOnlyNumbers({})).toBe('0');
    expect(fyFormatTypeOnlyNumbers()).toBe('0');
    expect(fyFormatTypeOnlyNumbers('teste123outro456teste')).toBe('123456');
    expect(fyFormatTypeOnlyNumbers('1234,56')).toBe('123456');
    expect(fyFormatTypeOnlyNumbers('123.456')).toBe('123456');
    expect(fyFormatTypeOnlyNumbers('12345.6')).toBe('123456');
  });

  it('fyFormatTypeValueToFloat', function () {
    expect(typeof fyFormatTypeValueToFloat('1234,56')).toBe('number');
    expect(fyFormatTypeValueToFloat('1234,56')).toBe(1234.56);
    expect(fyFormatTypeValueToFloat('1.234,56')).toBe(1234.56);
    expect(fyFormatTypeValueToFloat('12')).toBe(12);
    expect(fyFormatTypeValueToFloat('0,01')).toBe(0.01);
    expect(fyFormatTypeValueToFloat(1234.56)).toBe(1234.56);
    expect(fyFormatTypeValueToFloat(12)).toBe(12);
  });

  it('fyFormatTypeStringWithoutSpacesOrNull', function () {
    expect(fyFormatTypeStringWithoutSpacesOrNull('  test   ')).toBe('test');
    expect(fyFormatTypeStringWithoutSpacesOrNull('test   ')).toBe('test');
    expect(fyFormatTypeStringWithoutSpacesOrNull('  test')).toBe('test');
    expect(fyFormatTypeStringWithoutSpacesOrNull('  ')).toBe(null);
    expect(fyFormatTypeStringWithoutSpacesOrNull('')).toBe(null);
    expect(fyFormatTypeStringWithoutSpacesOrNull(12)).toBe(12);
    expect(fyFormatTypeStringWithoutSpacesOrNull(null)).toBe(null);
    expect(fyFormatTypeStringWithoutSpacesOrNull(undefined)).toBe(undefined);
    expect(fyFormatTypeStringWithoutSpacesOrNull([])).toStrictEqual([]);
  });

  it('fyFormatTypeJsonToObject', function () {
    expect(fyFormatTypeJsonToObject('test')).toBe(null);
    expect(fyFormatTypeJsonToObject('{test:test}')).toBe(null);
    expect(fyFormatTypeJsonToObject(null)).toBe(null);
    expect(fyFormatTypeJsonToObject(undefined)).toBe(null);
    expect(fyFormatTypeJsonToObject([])).toBe(null);
    expect(fyFormatTypeJsonToObject('{"test":"test"}')).toStrictEqual({ test: 'test' });
  });
});
