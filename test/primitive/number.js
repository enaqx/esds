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
      assert.equal(n1.valueOf(), 123);
      assert.equal(n2.valueOf(), 0);
      assert.equal(n3.valueOf(), 17);
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
});
