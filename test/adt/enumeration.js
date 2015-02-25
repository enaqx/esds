/**
 * Enumeration Unit Tests
 */

var assert = require("assert");
var esds = require('../../index');

var e;

describe('Enumeration', function() {
  describe('new esds.Enumeration()', function() {
    it('should create new Enumeration', function() {
      e = new esds.Enumeration("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday");
      assert.ok(e);
    });
  });
  describe('#indices', function() {
    it('should list all indices as array', function() {
      assert.deepEqual(e.indices, [0, 1, 2, 3, 4, 5, 6]);
    });
  });
  describe('#keys', function() {
    it('should list all keys as array', function() {
      assert.deepEqual(e.keys, [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday' ]);
    });
  });
  describe('#content', function() {
    it('should show enumeration content', function() {
      assert.ok(e.content, 'Does not return enumeration content');
      assert.deepEqual(e.content[0], 'Sunday');
      assert.deepEqual(e.content[1], 'Monday');
      assert.deepEqual(e.content[2], 'Tuesday');
      assert.deepEqual(e.content[3], 'Wednesday');
      assert.deepEqual(e.content[4], 'Thursday');
      assert.deepEqual(e.content[5], 'Friday');
      assert.deepEqual(e.content[6], 'Saturday');
    });
  });
});
