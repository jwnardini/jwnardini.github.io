define('burrito-quest2/routes/show-friend-magic-eye', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      stealBike: function stealBike() {
        this.set('stealBike', true);
        this.transitionTo('steal-bike-death');
      },
      followRandyOnFoot: function followRandyOnFoot() {
        this.set('followRandyOnFoot', true);
        this.transitionTo('follow-randy-on-foot');
      }
    }
  });
});