const formatMaskTaxId = (value: string): string => {
  const taxId = value.replace(/[^\d]/g, '');

  if (taxId.length === 11) return taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  if (taxId.length === 14)
    return taxId.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');

  return value;
};

const formatMaskCurrency = (value: number): string => {
  const currency = (value / 1).toFixed(2).replace('.', ',');

  return `R$ ${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
};

const formatMaskZipCode = (value: string): string => {
  const valueRegEx = value.replace(/\D/g, '').match(/(\d{0,5})(\d{0,8})/);

  let zipCode = value;

  if (valueRegEx) zipCode = `${valueRegEx[1]}-${valueRegEx[2]}`;

  return zipCode;
};

const formatMaskCellPhone = (value: string): string => {
  const valueRegEx = value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);

  let phone = value;

  if (valueRegEx) phone = `(${valueRegEx[1]}) ${valueRegEx[2]} - ${valueRegEx[3]}`;

  return phone;
};

export { formatMaskTaxId, formatMaskCurrency, formatMaskCellPhone, formatMaskZipCode };
