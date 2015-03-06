/**
 * Number Unit Tests
 */

var assert = require("assert");

describe('Number', function() {
  describe('new Number()', function() {
    it('should create new integer number', function() {
      var n1 = new Number(1);
      var n2 = new Number(1024);
      var n3 = new Number(-1);
      var n4 = new Number(-1024);
      var n5 = new Number(0);
      var n6 = new Number(-0);
      assert.ok(n1);
      assert.ok(n2);
      assert.ok(n3);
      assert.ok(n4);
      assert.ok(n5);
      assert.ok(n6);
    });
    it('should create new floating-point number', function() {
      var n1 = new Number(1.0);
      var n2 = new Number(1.024);
      var n3 = new Number(-1.0);
      var n4 = new Number(-1.024);
      var n5 = new Number(0.1);
      var n6 = new Number(-0.2);
      assert.ok(n1);
      assert.ok(n2);
      assert.ok(n3);
      assert.ok(n4);
      assert.ok(n5);
      assert.ok(n6);
    });
    it('should create new number on right string argument', function() {
      var n1 = new Number('123');
      var n2 = new Number('');
      var n3 = new Number('0x11');
      assert.equal(n1, 123);
      assert.equal(n2, 0);
      assert.equal(n3, 17);
    });
  });

  describe('Number properties', function() {
    it(`should have machine EPSILON equal to ` + 
        `${Number.EPSILON}`, function() {
      assert.ok(Number.EPSILON);
    });
    it(`should have the maximum safe integer MAX_SAFE_INTEGER equals to ` +
        `${Number.MAX_SAFE_INTEGER}`, function() {
      assert.ok(Number.MAX_SAFE_INTEGER);
    });
    it(`should have the largest positive number MAX_VALUE equals to ` +
        `${Number.MAX_VALUE}`, function() {
      assert.ok(Number.MAX_VALUE);
    });
    it(`should have the minimum safe integer MIN_SAFE_INTEGER  equals to ` +
        `${Number.MIN_SAFE_INTEGER}`, function() {
      assert.ok(Number.MIN_SAFE_INTEGER);
    });
    it(`should have the smallest positive number MIN_VALUE equals to ` +
        `${Number.MIN_VALUE}`, function() {
      assert.ok(Number.MIN_VALUE);
    });
    it('should have positive infinity POSITIVE_INFINITY', function() {
      assert.equal(Number.POSITIVE_INFINITY, Infinity);
    });
    it('should have negative infinity NEGATIVE_INFINITY', function() {
      assert.equal(Number.NEGATIVE_INFINITY, -1 * Infinity);
    });
  });

  describe('#isNaN()', function() {
    it('should determine whether the passed value is NaN', function() {
      assert.equal(Number.isNaN(NaN), true);
      assert.equal(Number.isNaN(1), false);
    });
  });

  describe('#isFinite()', function() {
    it('should determine whether the passed value is a finite number',
        function() {
      assert.equal(Number.isFinite(Infinity), false);
      assert.equal(Number.isFinite(2e64), true);
    });
  });

  describe('#isInteger()', function() {
    it('should determine whether the passed value is an integer', function() {
      assert.equal(Number.isInteger(0.1), false);
      assert.equal(Number.isInteger(1), true);
    });
  });

  describe('#isSafeInteger()', function() {
    it('should determine whether the provided value is a number ' +
        'that is a safe integer', function() {
      assert.equal(Number.isSafeInteger(1), true);
      assert.equal(Number.isSafeInteger(Math.pow(2, 53)), false);
    });
  });

  describe('#parseFloat()', function() {
    it('should parse a string argument and returns a floating point number',
        function() {
      assert.equal(Number.parseFloat("3.14"), 3.14);
      assert.equal(Number.parseFloat("314e-2"), 3.14);
      assert.equal(Number.parseFloat("0.0314E+2"), 3.14);
      assert.equal(Number.parseFloat("3.14more non-digit characters"), 3.14);
    });
  });

  describe('#parseInt()', function() {
    it('should parses a string argument and returns an integer of the ' +
        'specified radix or base', function() {
      assert.equal(Number.parseInt("0xF", 16), 15);
      assert.equal(Number.parseInt(15.99, 10), 15);
    });
  });

  describe('#toExponential()', function() {
    it('should return number in exponential notation', function() {
      var n = new Number(12.345);
      assert.equal(n.toExponential(), 1.2345e+1);
    });
    it('should return number in exponential notation with 2 fraction digits',
        function() {
      var n = new Number(12.345);
      assert.equal(n.toExponential(2), 1.23e+1);
    });
    it('should return number in exponential notation with 1 fraction digits',
        function() {
      var n = new Number(12.345);
      assert.equal(n.toExponential(1), 1.2e+1);
    });
  });

  describe('#toFixed()', function() {
    it('should format a number using fixed-point notation', function() {
      var n = Number(12345.6789);
      assert.equal(n.toFixed(), '12346');
      assert.equal(n.toFixed(1), '12345.7');
      assert.equal(n.toFixed(6), '12345.678900');
    });
  });

  describe('#toPrecision()', function() {
    it('should return a string representing the Number object ' + 
        'to the specified precision', function() {
      var n = Number(12345.6789);
      assert.equal(n.toPrecision(), '12345.6789');
      assert.equal(n.toPrecision(8), '12345.679');
      assert.equal(n.toPrecision(7), '12345.68');
      assert.equal(n.toPrecision(6), '12345.7');
      assert.equal(n.toPrecision(5), '12346');
      assert.equal(n.toPrecision(4), '1.235e+4');
      assert.equal(n.toPrecision(3), '1.23e+4');
      assert.equal(n.toPrecision(2), '1.2e+4');
      assert.equal(n.toPrecision(1), '1e+4');
    });
  });

  describe('#toString()', function() {
    it('should return a string representing the specified number', function() {
      var n = Number(10);
      assert.equal(n.toString(), '10');
      assert.equal(n.toString(2), '1010');
      assert.equal(n.toString(8), '12');
      assert.equal(n.toString(16), 'a');
    });
  });
});
