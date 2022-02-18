import * as FormatDate from './format.date';
import * as FormatMask from './format.mask';
import * as FormatTime from './format.time';
import * as FormatType from './format.type';
import * as Normalize from './normalize';
import * as QueryParams from './query.params';
import * as Slug from './slug';

export const { formatDate: fyFormatDate, parserDateOrder: fyParserDateOder } = FormatDate;

export const {
  formatMaskCellPhone: fyFormatMaskCellPhone,
  formatMaskCurrency: fyFormatMaskCurrency,
  formatMaskTaxId: fyFormatMaskTaxId,
  formatMaskZipCode: fyFormatMaskZipCode,
} = FormatMask;

export const { formatCurrentHours: fyFormatCurrentHours } = FormatTime;

export const {
  formatTypeInteger: fyFormatTypeInteger,
  formatTypeString: fyFormatTypeString,
  formatTypeOnlyNumbers: fyFormatTypeOnlyNumbers,
  formatTypeValueToFloat: fyFormatTypeValueToFloat,
  formatTypeStringWithoutSpacesOrNull: fyFormatTypeStringWithoutSpacesOrNull,
  formatTypeJsonToObject: fyFormatTypeJsonToObject,
} = FormatType;

export const {
  normalizeSpecialCharacters: fyNormalizeSpecialCharacters,
  normalizeString: fyNormalizeString,
} = Normalize;

export const { generateQueryParams: fyGenerateQueryParams } = QueryParams;

export const { generateSlug: fyGenerateSlug } = Slug;
