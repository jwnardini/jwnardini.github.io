define('burrito-quest2/tests/routes/question-wrong.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question-wrong.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question-wrong.js should pass jshint.');
  });
});