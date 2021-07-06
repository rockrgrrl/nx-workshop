import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(0.2323819874)).toEqual('2.3 / 10');
    expect(formatRating(1)).toEqual('10 / 10');
    expect(formatRating(0)).toEqual('0 / 10');

  });
});
