/* eslint-disable no-useless-escape */
import { normalizeSpecialCharacters } from './normalize';

const generateSlug = (text: string): string => {
  const normalizedText = normalizeSpecialCharacters(text);

  return normalizedText
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export { generateSlug };
