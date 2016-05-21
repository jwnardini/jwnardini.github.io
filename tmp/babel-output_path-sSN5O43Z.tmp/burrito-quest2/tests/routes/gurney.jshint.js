define('burrito-quest2/tests/routes/gurney.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney.js should pass jshint.');
  });
});