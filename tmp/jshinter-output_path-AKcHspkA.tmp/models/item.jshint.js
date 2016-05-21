QUnit.module('JSHint - models/item.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/item.js should pass jshint.\nmodels/item.js: line 4, col 9, \'DS\' is not defined.\nmodels/item.js: line 5, col 9, \'DS\' is not defined.\nmodels/item.js: line 6, col 10, \'DS\' is not defined.\n\n3 errors');
});
