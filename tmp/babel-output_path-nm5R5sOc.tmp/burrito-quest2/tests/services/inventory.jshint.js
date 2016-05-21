define('burrito-quest2/tests/services/inventory.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/inventory.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/inventory.js should pass jshint.');
  });
});