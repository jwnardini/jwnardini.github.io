define('burrito-quest2/routes/room-drugs-slingshot', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      wheelchair: function wheelchair() {
        this.set('wheelchair', true);
        this.transitionTo('wheelchair');
      },
      gurney: function gurney() {
        this.set('gurney', true);
        this.transitionTo('gurney');
      }
    }
  });
});