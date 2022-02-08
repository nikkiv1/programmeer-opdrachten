const opgave1 = require('../opgave-1.js')
const opgave2 = require('../opgave-2.js')
const opgave3 = require('../opgave-3.js')
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert


describe('Opgave 1', function() {
  describe('isPositief(getal) ...', function() {
    it('...geeft true terug bij een positief getal', function() {
      expect(opgave1.isPositief(9)).to.equal(true, "isPositief(9) zou true terug moeten geven");
    });
    it('...geeft false terug bij een negatief getal', function() {
      expect(opgave1.isPositief(-9)).to.equal(false, "isPositief(-9) zou false terug moeten geven");
    });
    it('...geeft true terug bij 0', function() {
      expect(opgave1.isPositief(0)).to.equal(true, "isPositief(0) zou true terug moeten geven");
    });
  });
});

describe('Opgave 2', function() {
  describe('som(a, b) ...', function() {
    it('...moet de som van twee positieve getallen correct berekenen', function() {
      expect(opgave2.som(3, 4)).to.equal(7, "som(3, 4) moet 7 als uitkomst hebben");
    });
    it('...moet de som van twee negatieve getallen correct berekenen', function() {
      expect(opgave2.som(-3, -4)).to.equal(-7, "som(-3, -4) moet -7 als uitkomst hebben");
    });
    it('...moet de som van een positief en negatief getal correct berekenen', function() {
      expect(opgave2.som(3, -4)).to.equal(-1, "som(3, -4) moet -1 als uitkomst hebben");
      expect(opgave2.som(-3, 4)).to.equal(1, "som(-3, 4) moet 1 als uitkomst hebben");
    });
    it('...moet sommen met 0 correct berekenen', function() {
      expect(opgave2.som(3, 0)).to.equal(3, "som(3, 0) moet 3 als uitkomst hebben");
      expect(opgave2.som(0, 3)).to.equal(3, "som(0, 3) moet 3 als uitkomst hebben");
      expect(opgave2.som(0, 0)).to.equal(0, "som(0, 0) moet 0 als uitkomst hebben");
    });
    it('...moet sommen met kommagetallen correct berekenen', function() {
      expect(opgave2.som(1.3, 4.8)).to.equal(6.1, "som(1.3, 4.8) moet 6.1 als uitkomst hebben");
      expect(opgave2.som(1.3, -4.8)).to.equal(-3.5, "som(1.3, -4.8) moet -3.5 als uitkomst hebben");
      expect(opgave2.som(-1.3, -4.8)).to.equal(-6.1, "som(-1.3, -4.8) moet -6.1 als uitkomst hebben");
      expect(opgave2.som(1.3, 0)).to.equal(1.3, "som(1.3, 0) moet 1.3 als uitkomst hebben");
    });
  });
});

describe('Opgave 3', function() {
  describe('grootsteGetal(a, b) ...', function() {
    it('...geeft getal a terug als deze groter is dan getal b', function() {
      expect(opgave3.grootsteGetal(7, 4)).to.equal(7, "grootsteGetal(7, 4) zou 7 terug moeten geven");
    });
    it('...geeft getal b terug als deze groter is dan getal a', function() {
      expect(opgave3.grootsteGetal(2, 9)).to.equal(9, "grootsteGetal(2,9) zou 9 terug moeten geven");
    });
    it('...geeft getal a of getal b terug als deze even groot zijn', function() {
      expect(opgave3.grootsteGetal(6, 6)).to.equal(6, "grootsteGetal(6, 6) zou 6 terug moeten geven");
    });
    it('...werkt ook met 0 of negatieve getallen', function() {
      expect(opgave3.grootsteGetal(-6, 6)).to.equal(6, "grootsteGetal(-6, 6) zou 6 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -6)).to.equal(-6, "grootsteGetal(-6, -6) zou -6 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -4)).to.equal(-4, "grootsteGetal(-6, -4) zou -4 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, 0)).to.equal(0, "grootsteGetal(-6, 0) zou 0 true terug moeten geven");
      expect(opgave3.grootsteGetal(0, -4)).to.equal(0, "grootsteGetal(0, -4) zou 0 terug moeten geven");
      expect(opgave3.grootsteGetal(6, 0)).to.equal(6, "grootsteGetal(6, 0) zou 6 terug moeten geven");
      expect(opgave3.grootsteGetal(0, 4)).to.equal(4, "grootsteGetal(0, 4) zou 4 terug moeten geven");
      expect(opgave3.grootsteGetal(0, 0)).to.equal(0, "grootsteGetal(0, 0) zou 0 terug moeten geven");
      expect(opgave3.grootsteGetal(-6, -8)).to.equal(-6, "grootsteGetal(-6, -8) zou -6 terug moeten geven");
    });
  });
});

delete require.cache[require.resolve('../opgave-1.js')]
delete require.cache[require.resolve('../opgave-2.js')]
delete require.cache[require.resolve('../opgave-3.js')]