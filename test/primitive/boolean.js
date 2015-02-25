/**
 * Boolean Unit Tests
 */

var assert = require("assert");

describe('Boolean', function() {
  describe('new Boolean()', function() {
    // Initial value: false
    it('should set initial value to false on empty argument', function() {
      var b = new Boolean();
      assert.equal(b, false);
    });
    it('should set initial value to false on 0', function() {
      var b = new Boolean(0);
      assert.equal(b, false);
    });
    it('should set initial value to false on -0', function() {
      var b = new Boolean(-0);
      assert.equal(b, false);
    });
    it('should set initial value to false on NaN', function() {
      var b = new Boolean(NaN);
      assert.equal(b, false);
    });
    it('should set initial value to false on undefined', function() {
      var b = new Boolean(undefined);
      assert.equal(b, false);
    });
    it('should set initial value to false on null', function() {
      var b = new Boolean(null);
      assert.equal(b, false);
    });
    it('should set initial value to false on empty string', function() {
      var b = new Boolean('');
      assert.equal(b, false);
    });
    it('should set initial value to false on false', function() {
      var b = new Boolean(false);
      assert.equal(b, false);
    });
    // Initial value: true
    it('should set initial value to true on true', function() {
      var b = new Boolean(true);
      assert.equal(b, true);
    });
    it('should set initial value to true"on Infinity', function() {
      var b = new Boolean(Infinity);
      assert.equal(b, true);
    });
    it('should set initial value to true on 1', function() {
      var b = new Boolean(1);
      assert.equal(b, true);
    });
    it('should set initial value to true on Number.MAX_VALUE', function() {
      var b = new Boolean(Number.MAX_VALUE);
      assert.equal(b, true);
    });
    it('should set initial value to true on nonempty string', function() {
      var b = new Boolean('nonempty string');
      assert.equal(b, true);
    });
    it('should set initial value to true on array', function() {
      var b = new Boolean([]);
      assert.equal(b, true);
    });
    it('should set initial value to true on object', function() {
      var b = new Boolean({});
      assert.equal(b, true);
    });
  });

  describe('#toString()', function() {
    it('should return string "true" of true Boolean', function() {
      var b = new Boolean(true);
      assert.equal(b.toString(), 'true');
    });
    it('should return string "false" of false Boolean', function() {
      var b = new Boolean(false);
      assert.equal(b.toString(), 'false');
    });
  });

  describe('#valueOf()', function() {
    it('should return true of true Boolean', function() {
      var b = new Boolean(true);
      assert.equal(b.valueOf(), true);
    });
    it('should return false of false Boolean', function() {
      var b = new Boolean(false);
      assert.equal(b.valueOf(), false);
    });
  });

  describe('Algebraic logic', function() {
    var a = new Boolean(true);
    var b = new Boolean(false);
    it('should return false of (true and false) expression', function() {
      assert.equal((a && b).valueOf(), false);
    });
    it('should return true of (true or false) expression', function() {
      assert.equal((a || b).valueOf(), true);
    });
    it('should return false of (not true) expression', function() {
      assert.equal(!a.valueOf(), false);
    });
    it('should return true of (not false) expression', function() {
      assert.equal(!b.valueOf(), true);
    });
  });
});
