define('burrito-quest2/tests/routes/talk-to-steve.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/talk-to-steve.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/talk-to-steve.js should pass jshint.');
  });
});