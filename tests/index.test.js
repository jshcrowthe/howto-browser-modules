import { expect } from 'chai';
import { sum, difference } from '../src/index';

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

describe('difference', () => {
  it('difference of 3 and 5 is 2', () => {
    expect(difference(3, 5)).equal(2);
    expect(difference(5, 3)).equal(2);
  });
  it('cannot find difference of more than 2 values', () => {
    expect(() => {
      difference(3, 5, 4);
    }).throw();
  });
  it('Should handle incorrect inputs', () => {
    expect(() => {
      difference('one', 2);
    }).to.throw();
  });
});
