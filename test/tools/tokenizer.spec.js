const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const Anlam = require('../../index');
const Sample = require('../sample/tokenizer.json');

const { expect } = chai;

chai.use(sinonChai);

let anlam;

Sample.forEach((sample) => {

  describe('Given an instance of lib', () => {
    beforeEach(() => {
      anlam = new Anlam(sample.argument);
    });

    describe('when I check tokens', () => {
      it('should return the expected normalizer output', () => {
        expect(anlam.tokenize().out()).to.eql(sample.output);
      });
    });
  });

});
