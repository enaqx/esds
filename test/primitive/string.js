/**
 * String Unit Tests
 */

var assert = require("assert");

var s = new String('string');

describe('String', function() {
  describe('new String()', function() {
    it('should create new string', function() {
      assert.ok(s);
    });
  });

  describe('#length', function() {
    it('should represent the length of a string', function() {
      assert.equal(s.length, 6);
    });
  });

  describe('#fromCharCode()', function() {
    it('should return a string created by using the specified ' +
        'sequence of Unicode values', function() {
      assert.equal(String.fromCharCode(115, 116, 114, 105, 110, 103), 'string');
    });
  });

  describe('#charAt()', function() {
    it('should return the specified character from a string', function() {
      assert.equal(s.charAt(0), 's');
      assert.equal(s.charAt(1), 't');
      assert.equal(s.charAt(2), 'r');
      assert.equal(s.charAt(3), 'i');
      assert.equal(s.charAt(4), 'n');
      assert.equal(s.charAt(5), 'g');
    });
  });

  describe('#charCodeAt()', function() {
    it('should return the numeric Unicode value of the character ' +
        'at the given index ', function() {
      assert.equal(s.charCodeAt(0), 115);
      assert.equal(s.charCodeAt(1), 116);
      assert.equal(s.charCodeAt(2), 114);
      assert.equal(s.charCodeAt(3), 105);
      assert.equal(s.charCodeAt(4), 110);
      assert.equal(s.charCodeAt(5), 103);
    });
  });

  describe('#includes()', function() {
    it('should determine whether one string may be found within ' +
        'another string', function() {
      assert.equal(s.includes('str'), true);
      assert.equal(s.includes('strng'), false);
    });
  });

  describe('#endsWith()', function() {
    it('should determine whether a string ends with the characters ' +
        'of another string', function() {
      assert.equal(s.endsWith('ing'), true);
      assert.equal(s.endsWith('strng'), false);
      assert.equal(s.endsWith('tr', 3), true);
    });
  });

  describe('#indexOf()', function() {
    it('should return the index within the string of the first occurrence ' +
        'of the specified value', function() {
      assert.equal(s.indexOf('ing'), 3);
      assert.equal(s.indexOf('ng'), 4);
    });
  });

  describe('#lastIndexOf()', function() {
    it('should return the index within the calling String object of the last ' +
        'occurrence of the specified value', function() {
      assert.equal((s + s).lastIndexOf('ing'), 9);
      assert.equal((s + s).lastIndexOf('ng'), 10);
    });
  });
});
