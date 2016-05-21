define('burrito-quest2/routes/bribe-kid', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('game');
    },
    inventory: _ember['default'].inject.service(),
    actions: {
      stealCopsGun: function stealCopsGun() {
        this.set('stealCopsGun', true);
        this.transitionTo('steal-cops-gun-death');
      },
      enterHospital: function enterHospital() {
        this.set('enterHospital', true);
        this.transitionTo('enter-hospital');
      },
      enterHospitalDeath: function enterHospitalDeath() {
        this.set('enterHospitalDeath', true);
        this.transitionTo('enter-hospital-death');
      }
    }

  });
});