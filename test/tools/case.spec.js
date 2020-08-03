const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const Anlam = require('../../index');
const SampleLower = require('../sample/case_lower.json');
const SampleUpper = require('../sample/case_upper.json');
const SampleTitle = require('../sample/case_title.json');

const { expect } = chai;

chai.use(sinonChai);

let anlam;

SampleLower.forEach((sample) => {

  describe('Given an instance of lib', () => {
    beforeEach(() => {
      anlam = new Anlam(sample.argument);
    });

    describe('when I apply lower', () => {
      it('should return the expected lowercase output', () => {
        expect(anlam.lower().out()).to.be.equal(sample.output);
      });
    });
  });

});

SampleUpper.forEach((sample) => {

  describe('Given an instance of lib', () => {
    beforeEach(() => {
      anlam = new Anlam(sample.argument);
    });

    describe('when I apply upper', () => {
      it('should return the expected uppercase output', () => {
        expect(anlam.upper().out()).to.be.equal(sample.output);
      });
    });
  });

});

SampleTitle.forEach((sample) => {

  describe('Given an instance of lib', () => {
    beforeEach(() => {
      anlam = new Anlam(sample.argument);
    });

    describe('when I apply title', () => {
      it('should return the expected titlecase output', () => {
        expect(anlam.title().out()).to.be.equal(sample.output);
      });
    });
  });

});
