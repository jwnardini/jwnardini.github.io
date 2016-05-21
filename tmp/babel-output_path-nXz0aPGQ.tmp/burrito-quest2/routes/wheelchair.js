define('burrito-quest2/routes/wheelchair', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      wheelchairDistractMagicEye: function wheelchairDistractMagicEye() {
        this.set('wheelchairDistractMagicEye', true);
        this.transitionTo('wheelchair-distract-magic-eye');
      },
      wheelchairRunForIt: function wheelchairRunForIt() {
        this.set('wheelchairRunForIt', true);
        this.transitionTo('wheelchair-run-for-it');
      }
    }
  });
});