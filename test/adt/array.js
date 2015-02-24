/**
 * Array Unit Tests
 */

var assert = require("assert");

var a;

describe('Array', function() {
  describe('new Array()', function() {
    it('should init array with 10 elements', function() {
      a = new Array(10);
      assert.ok(a);
    });
  });
  describe('#length', function() {
    it('should return the number of elements in an array', function() {
      assert.equal(a.length, 10);
    });
  });
  describe('#isArray()', function() {
    it('should return true if a variable is an array', function() {
      assert.equal(Array.isArray(a), true);
    });
  });
});
