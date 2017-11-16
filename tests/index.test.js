import { expect } from 'chai';
import { sum } from '../src/index';

describe('sum', () => {
  it('3 + 5 = 8', () => {
    expect(sum(3, 5)).equal(8);
  });
  it('3 + 5 + 4 = 8', () => {
    expect(sum(3, 5, 4)).equal(12);
  });
  it('Should handle incorrect inputs', () => {
    expect(() => {
      sum('one', 2, 3);
    }).to.throw();
  });
});
