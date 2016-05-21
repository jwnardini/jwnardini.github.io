define('burrito-quest2/services/inventory', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    items: [],

    add: function add(item) {
      this.get('items').pushObject(item);
    },

    clear: function clear() {
      this.get('items').setObjects([]);
    }
  });
});