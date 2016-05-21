define('burrito-quest2/routes/follow-randy-on-foot', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      putOnSunglasses: function putOnSunglasses() {
        this.set('putOnSunglasses', true);
      },
      bribeKid: function bribeKid() {
        var slingshot = { name: "Slingshot", image: "/assets/images/shingshot.png" };
        this.get('inventory').add(slingshot);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('bribeKid', true);
          anything.save();
        });
        this.transitionTo('bribe-kid');
      },
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