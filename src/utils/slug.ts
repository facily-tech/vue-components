/* eslint-disable no-useless-escape */
import { normalizeSpecialCharacters } from './normalize';

const generateSlug = (text: string): string => {
  const normalizedText = normalizeSpecialCharacters(text);

  const value = normalizedText
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

  return value;
};

export { generateSlug };
