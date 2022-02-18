import { fyFormatDate, fyParserDateOder } from '../';

describe('Test formaters', () => {
  it('fyFormatDate', function () {
    const NOW = new Date('2022-01-31T09:09:00');

    const mockDateNow = jest.spyOn(Date, 'now').mockImplementation(() => {
      return NOW.getTime();
    });

    expect(fyFormatDate(NOW)).toBe('31/01/2022');
    expect(fyFormatDate(NOW, 'YYYY-MM-DD')).toBe('2022-01-31');

    mockDateNow.mockRestore();
  });

  it('fyParserDateOder', function () {
    const NOW = new Date('2022-01-31T09:09:00');

    const mockDateNow = jest.spyOn(Date, 'now').mockImplementation(() => {
      return NOW.getTime();
    });

    expect(fyParserDateOder('31/01/2022', '20-01-2022', 'YYYY-MM-DD')).toStrictEqual([
      '2022-01-20',
      '2022-01-31',
    ]);
    expect(fyParserDateOder('20/01/2022', '31/01/2022')).toStrictEqual([
      '2022-01-20T03:00:00',
      '2022-01-31T03:00:00',
    ]);

    mockDateNow.mockRestore();
  });
});
