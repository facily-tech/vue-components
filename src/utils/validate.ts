export const isValidCPF = (cpf: string): boolean => {
  const cpfOnlyNumbers = cpf.replace(/[^\d]+/g, '');

  if (
    [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].includes(cpfOnlyNumbers)
  ) {
    return false;
  }

  if (cpfOnlyNumbers.length !== 11 || !!cpfOnlyNumbers.match(/(\d)\1{10}/)) {
    return false;
  }

  const cpfArray = cpfOnlyNumbers.split('');
  const validator = cpfArray
    .filter((digit, index, array) => index >= array.length - 2 && digit)
    .map((el) => +el);

  const toValidate = (pop: number) =>
    cpfArray.filter((digit, index, array) => index < array.length - pop && digit).map((el) => +el);

  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11) % 10;

  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
};
