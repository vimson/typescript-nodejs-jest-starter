import { isDateValid } from '@utils/generic.utils';

describe('Checking the Date utility', () => {
  test('Checking the passed date is a string or not', () => {
    expect(isDateValid('2020-01-01')).toBe(true);
    expect(isDateValid('20200101')).toBe(false);
  });
});
