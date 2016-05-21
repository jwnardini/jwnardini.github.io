define('burrito-quest2/tests/components/talk-to-steve.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/talk-to-steve.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/talk-to-steve.js should pass jshint.');
  });
});