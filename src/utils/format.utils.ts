import moment from 'moment';

const formatTaxId = (value: string): string => {
  const taxId = value.replace(/[^\d]/g, '');

  if (taxId.length === 11) return taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  if (taxId.length === 14)
    return taxId.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

  return value;
};

const formatCurrency = (value: number): string => {
  const currency = (value / 1).toFixed(2).replace('.', ',');

  return `R$ ${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

const formatZipCode = (value: string): string => {
  const valueRegEx = value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,8})/);

  let zipCode = value;

  if (valueRegEx) zipCode = `${valueRegEx[1]}-${valueRegEx[2]}`;

  return zipCode;
};

const formatCellPhone = (value: string): string => {
  const valueRegEx = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

  let phone = value;

  if (valueRegEx) phone = `(${valueRegEx[1]}) ${valueRegEx[2]} - ${valueRegEx[3]}`;

  return phone;
};

const formatDate = (date: string): string => moment.utc(date).format('DD/MM/YYYY');

const parserDateOrder = (init: string, end: string, format: string): string[] => {
  let dateA;
  let dateB;
  const partDateInit = init.split('-');
  const partDateEnd = end.split('-');

  const dateInitF = new Date(
    parseInt(partDateInit[2]),
    parseInt(partDateInit[1]) - 1,
    parseInt(partDateInit[0]),
  );
  const dateEndF = new Date(
    parseInt(partDateEnd[2]),
    parseInt(partDateEnd[1]) - 1,
    parseInt(partDateEnd[0]),
  );

  if (dateInitF > dateEndF) {
    dateA = end;
    dateB = init;
  } else {
    dateA = init;
    dateB = end;
  }

  let dateInit = moment.utc(dateA).format();
  let dateEnd = moment.utc(dateB).format();

  dateInit = dateInit.replace('Z', '');
  dateEnd = dateEnd.replace('Z', '');
  dateEnd = dateEnd.replace('00:00:00', '23:59:59');

  if (format) {
    return [moment(dateA).format('DD/MM/YYYY'), moment(dateB).format('DD/MM/YYYY')];
  }

  return [dateInit, dateEnd];
};

export { formatTaxId, formatCurrency, formatCellPhone, formatZipCode, formatDate, parserDateOrder };
