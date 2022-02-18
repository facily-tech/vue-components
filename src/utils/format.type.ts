const formatTypeInteger = (value: string | number): number => parseInt(value) || 0;

const formatTypeString = (value?: unknown): string =>
  value && typeof value !== 'object' ? value.toString() : '';

const formatTypeOnlyNumbers = (value?: unknown): string =>
  formatTypeString(value).replace(/\D+/g, '') || '0';

const formatTypeValueToFloat = (value: string | number): number => {
  let newValue = value;

  if (typeof value === 'string') {
    newValue = formatTypeString(value).replace(/\./g, '').replace(/,/g, '.');
  }

  return parseFloat(newValue);
};

const formatTypeStringWithoutSpacesOrNull = (value: unknown): unknown => {
  if (typeof value === 'string') {
    const newValue = value.trim();

    if (newValue === '') return null;

    return newValue;
  }

  return value;
};

const formatTypeJsonToObject = (value?: unknown): JSON | null => {
  try {
    return typeof value === 'string' ? JSON.parse(value) : null;
  } catch {
    return null;
  }
};

export {
  formatTypeInteger,
  formatTypeString,
  formatTypeOnlyNumbers,
  formatTypeValueToFloat,
  formatTypeStringWithoutSpacesOrNull,
  formatTypeJsonToObject,
};
