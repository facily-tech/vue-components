import moment from 'moment';

const formatDate = (date: moment.MomentInput, format = 'DD/MM/YYYY'): string =>
  moment.utc(date).format(format);

const parserDateOrder = (init: string, end: string, format?: string): string[] => {
  let dateA: Date;
  let dateB: Date;

  const replacedCharInit = init.replaceAll('/', '-');
  const replacedCharEnd = end.replaceAll('/', '-');

  const partDateInit = replacedCharInit.split('-');
  const partDateEnd = replacedCharEnd.split('-');

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
    dateA = dateEndF;
    dateB = dateInitF;
  } else {
    dateA = dateInitF;
    dateB = dateEndF;
  }

  if (format) {
    console.log('format ', [moment(dateA).format(format), moment(dateB).format(format)]);
    return [moment(dateA).format(format), moment(dateB).format(format)];
  }

  let dateInit = moment.utc(dateA).format();
  let dateEnd = moment.utc(dateB).format();

  dateInit = dateInit.replace('Z', '');
  dateInit = dateInit.replace('00:00:00', '23:59:59');
  dateEnd = dateEnd.replace('Z', '');
  dateEnd = dateEnd.replace('00:00:00', '23:59:59');

  return [dateInit, dateEnd];
};

export { parserDateOrder, formatDate };
