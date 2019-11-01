const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const Anlam = require('../../index');
const Sample = require('../sample/normalizer.json');

const { expect } = chai;

chai.use(sinonChai);

let anlam;

Sample.forEach((sample) => {

  describe('Given an instance of lib', () => {
    beforeEach(() => {
      anlam = new Anlam(sample.argument);
    });

    describe('when I apply normalizer', () => {
      it('should return the expected normalizer output', () => {
        expect(anlam.normalize().out()).to.be.equal(sample.output);
        expect(anlam.normalize().data()).to.be.equal(sample.output);
      });
    });
  });

});
