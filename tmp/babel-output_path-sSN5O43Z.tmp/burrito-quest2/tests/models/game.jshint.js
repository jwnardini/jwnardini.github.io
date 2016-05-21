define('burrito-quest2/tests/models/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/game.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/game.js should pass jshint.\nmodels/game.js: line 4, col 16, \'DS\' is not defined.\nmodels/game.js: line 5, col 16, \'DS\' is not defined.\nmodels/game.js: line 6, col 15, \'DS\' is not defined.\nmodels/game.js: line 7, col 16, \'DS\' is not defined.\nmodels/game.js: line 8, col 19, \'DS\' is not defined.\nmodels/game.js: line 9, col 17, \'DS\' is not defined.\nmodels/game.js: line 10, col 17, \'DS\' is not defined.\nmodels/game.js: line 11, col 13, \'DS\' is not defined.\nmodels/game.js: line 12, col 16, \'DS\' is not defined.\n\n9 errors');
  });
});