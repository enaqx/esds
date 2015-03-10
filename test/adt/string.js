/**
 * String Unit Tests
 */

var assert = require("assert");
var esds = require('../../index');

var s = new esds.String('string');

describe('String', function() {
  describe('new esds.String()', function() {
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
      assert.equal(esds.String.fromCharCode(115, 116, 114, 105, 110, 103),
        'string');
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

  describe('#localeCompare()', function() {
    it('should return a number indicating whether a reference string comes ' +
        'before or after the given string',
        function() {
      var a = new esds.String('a');
      var c = new esds.String('c');
      assert.equal(a.localeCompare('c'), -2);
      assert.equal(c.localeCompare('a'), 2);
      assert.equal(a.localeCompare('a'), 0);
      assert.equal(c.localeCompare('c'), 0);
    });
  });

  describe('#match()', function() {
    it('should retrieve the matches when matching a string against ' +
        'a regular expression', function() {
      var s = new esds.String('abcdefghijklmnopqrstuvwxyz');
      var regexp = /[A-E]/gi;
      assert.equal(s.match(regexp)[0], 'a');
      assert.equal(s.match(regexp)[2], 'c');
      assert.equal(s.match(regexp)[4], 'e');
    });
  });

  describe('#repeat()', function() {
    it('should return a new string which contains the specified number ' +
        'of copies of the given string', function() {
      assert.equal(s.repeat(0), '');
      assert.equal(s.repeat(1), 'string');
      assert.equal(s.repeat(2), 'stringstring');
      assert.equal(s.repeat(3), 'stringstringstring');
    });
  });

  describe('#replace()', function() {
    it('should return a new string with some or all matches of a pattern ' +
        'replaced by a replacement', function() {
      var s1 = new esds.String('apples are juicy');
      var s2 = new esds.String('apples oranges');
      var regexp1 = /apples/gi;
      var regexp2 = /(\w+)\s(\w+)/;
      assert.equal(s1.replace(regexp1, 'oranges'), 'oranges are juicy');
      assert.equal(s2.replace(regexp2, '$2 $1'), 'oranges apples');
    });
  });

  describe('#search()', function() {
    it('should executes a search for a match between a regular expression ' +
        'and string', function() {
      assert.equal(s.search(/str/), 0);
      assert.equal(s.search(/ing/), 3);
      assert.equal(s.search(/strng/), -1);
    });
  });

  describe('#slice()', function() {
    it('should extract a section of a string and returns a new string',
        function() {
      assert.equal(s.slice(1, -1), 'trin');
      assert.equal(s.slice(2, -2), 'ri');
    });
  });

  describe('#split()', function() {
    it('should return an array of strings by separating the string ' +
        'into substrings', function() {
      var s = new esds.String('apples, oranges, bananas');
      assert.equal(s.split(/\s*,\s*/)[0], 'apples');
      assert.equal(s.split(/\s*,\s*/)[1], 'oranges');
      assert.equal(s.split(/\s*,\s*/)[2], 'bananas');
    });
  });

  describe('#startsWith()', function() {
    it('should determine whether a string begins with the characters ' +
        'of another string', function() {
      assert.equal(s.startsWith('str'), true);
      assert.equal(s.startsWith('ing', 3), true);
      assert.equal(s.startsWith('stn'), false);
      assert.equal(s.startsWith('ngi', 3), false);
    });
  });

  describe('#substr()', function() {
    it('should return a string beginning at the specified location through ' +
        'the specified number of characters', function() {
      assert.equal(s.substr(1, 2), 'tr');
    });
  });

  describe('#substring()', function() {
    it('should return a subset of a string between one index and another',
        function() {
      assert.equal(s.substring(2, 4), 'ri');
    });
  });

  describe('#toLowerCase()', function() {
    it('should return the calling string value converted to lowercase',
        function() {
      var s = new esds.String('STRING');
      assert.equal(s.toLowerCase(), 'string');
    });
  });

  describe('#toUpperCase()', function() {
    it('should return the calling string value converted to uppercase',
        function() {
      assert.equal(s.toUpperCase(), 'STRING');
    });
  });

  describe('#trim()', function() {
    it('should remove whitespace from both ends of a string', function() {
      var s = new esds.String('  string  ');
      assert.equal(s.trim(), 'string');
    });
  });
});
