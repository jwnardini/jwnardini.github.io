define('burrito-quest2/routes/gurney-trophy', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      gurneyDistractMagicEyeTrophy: function gurneyDistractMagicEyeTrophy() {
        this.set('gurneyDistractMagicEyeTrophy', true);
        this.transitionTo('gurney-distract-trophy');
      },
      gurneyRunForIt: function gurneyRunForIt() {
        this.set('gurneyRunForIt', true);
        this.transitionTo('gurney-run-for-it');
      }
    }
  });
});