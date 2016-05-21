define('burrito-quest2/routes/gurney', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      gurneyDistractMagicEye: function gurneyDistractMagicEye() {
        this.set('gurneyDistractMagicEye', true);
        this.transitionTo('gurney-distract-magic-eye');
      },
      gurneyRunForIt: function gurneyRunForIt() {
        this.set('gurneyRunForIt', true);
        this.transitionTo('gurney-run-for-it');
      }
    }
  });
});