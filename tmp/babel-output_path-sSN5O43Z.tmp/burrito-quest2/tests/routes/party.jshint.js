define('burrito-quest2/tests/routes/party.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/party.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/party.js should pass jshint.');
  });
});