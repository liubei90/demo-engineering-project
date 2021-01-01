const expect = require('chai').expect;

const m1 = require('../src/page1/m1');

describe('page1 m1 模块', () => {
  it('m1.add(1, 2) === 3', () => {
    expect(m1.default(1, 2)).to.equal(3);
  });
});
