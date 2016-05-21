define('burrito-quest2/components/inventory-display', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    inventory: _ember['default'].inject.service()
  });
});