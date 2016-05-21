define('burrito-quest2/routes/wheelchair-trophy', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      wheelchairDistractMagicEyeTrophy: function wheelchairDistractMagicEyeTrophy() {
        this.set('wheelchairDistractMagicEyeTrophy', true);
        this.transitionTo('wheelchair-distract-trophy');
      },
      wheelchairRunForItTrophy: function wheelchairRunForItTrophy() {
        this.set('wheelchairRunForItTrophy', true);
        this.transitionTo('wheelchair-run-for-it-trophy');
      }
    }
  });
});