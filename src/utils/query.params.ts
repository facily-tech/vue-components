import { IParamsProps } from './types';

const generateQueryParams = (params: IParamsProps): string => {
  let query = '?';

  Object.entries(params).forEach(([key, value]) => {
    if (value && value !== '')
      query = `${query}&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });

  return query;
};

export { generateQueryParams };
