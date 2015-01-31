/**
 * Boolean Unit Tests
 */

var assert = require("assert");

describe('Boolean', function() {
  describe('Create new Boolean object', function() {

    // Initial value: false
    it('should set initial value to "false" on empty argument', function() {
      var b = new Boolean();
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on 0', function() {
      var b = new Boolean(0);
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on -0', function() {
      var b = new Boolean(-0);
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on NaN', function() {
      var b = new Boolean(NaN);
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on undefined', function() {
      var b = new Boolean(undefined);
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on null', function() {
      var b = new Boolean(null);
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on empty string', function() {
      var b = new Boolean('');
      assert.equal(b, false, 'Initial value is "true"');
    });
    it('should set initial value to "false" on "false"', function() {
      var b = new Boolean(false);
      assert.equal(b, false, 'Initial value is "true"');
    });

    // Initial value: true
    it('should set initial value to "true" on "true"', function() {
      var b = new Boolean(true);
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on Infinity', function() {
      var b = new Boolean(Infinity);
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on 1', function() {
      var b = new Boolean(1);
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on Number.MAX_VALUE', function() {
      var b = new Boolean(Number.MAX_VALUE);
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on nonempty string', function() {
      var b = new Boolean('nonempty string');
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on array', function() {
      var b = new Boolean([]);
      assert.equal(b, true, 'Initial value is "false"');
    });
    it('should set initial value to "true" on object', function() {
      var b = new Boolean({});
      assert.equal(b, true, 'Initial value is "false"');
    });
  });
});
