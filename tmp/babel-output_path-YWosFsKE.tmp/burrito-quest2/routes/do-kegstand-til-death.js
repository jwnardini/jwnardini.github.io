define('burrito-quest2/routes/do-kegstand-til-death', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service()
  });
});