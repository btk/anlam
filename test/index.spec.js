const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const Anlam = require('../index');

const { expect } = chai;

chai.use(sinonChai);

let anlam;

describe('Library', () => {
  beforeEach(() => anlam = new Anlam());

  it('should return true when I check for status', () => {
    expect(anlam.status).to.eql(true);
  });

  it('should have a non-empty anlam object when created with empty string argument', () => {
    expect(typeof anlam.anlam).to.eql("object");
  });

  it('should have a non-empty anlam object when created with empty option object argument', () => {
    expect(typeof anlam.anlam).to.eql("object");
  });
});

let anlamWithString;

describe('Library', () => {
  beforeEach(() => anlamWithString = new Anlam("merhaba dünya"));

  it('should return true when I check for status', () => {
    expect(anlamWithString.status).to.eql(true);
  });

  it('should have a non-empty anlam object when created with an initial string argument', () => {
    expect(typeof anlamWithString.anlam).to.eql("object");
  });

  it('should have a non-empty anlam object when created with an initial option object argument', () => {
    expect(typeof anlamWithString.anlam).to.eql("object");
  });
});


let anlamWithOptions;

describe('Library', () => {
  beforeEach(() => anlamWithOptions = new Anlam({string: "merhaba dünya"}));

  it('should return true when I check for status', () => {
    expect(anlamWithOptions.status).to.eql(true);
  });

  it('should have a non-empty anlam object when created with an initial string argument', () => {
    expect(typeof anlamWithOptions.anlam).to.eql("object");
  });

  it('should have a non-empty anlam object when created with an initial option object argument', () => {
    expect(typeof anlamWithOptions.anlam).to.eql("object");
  });
});
