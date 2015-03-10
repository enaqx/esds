/**
 * Array Unit Tests
 */

var assert = require("assert");
var esds = require('../../index');

var a = new esds.Array('a', 'b', 'c', 'd', 'e');

describe('Array', function() {
  describe('new esds.Array()', function() {
    it('should init array with 5 elements', function() {
      assert.ok(a);
    });
  });

  describe('#length', function() {
    it('should return the number of elements in an array', function() {
      assert.equal(a.length, 5);
    });
  });

  describe('#isArray()', function() {
    it('should return true if a variable is an array', function() {
      assert.equal(esds.Array.isArray(a), true);
    });
  });

  describe('#equals()', function() {
    it('should check two arrays for equality', function() {
      assert.equal(a.equals(['a', 'b', 'c', 'd', 'e']), true);
      assert.equal(a.equals(['a', 'b', 'c', 'd']), false);
    })
  })

  describe('#pop()', function() {
    it('should remove the last element from an array and return that element',
        function() {
      assert.equal(a.pop(), 'e');
      assert.equal(a.equals(['a', 'b', 'c', 'd']), true);
    });
  });

  describe('push()', function() {
    it('should add elements to the end of an array and return the new length',
        function() {
      assert.equal(a.push('e'), 5);
      assert.equal(a.equals(['a', 'b', 'c', 'd', 'e']), true);
    });
  });
});
