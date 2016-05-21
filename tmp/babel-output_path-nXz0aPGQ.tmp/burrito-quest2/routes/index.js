define('burrito-quest2/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      startGame: function startGame() {
        this.get('inventory').clear();
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('doKegstand', false);
          anything.save();
        });
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeSunglasses', false);
          anything.save();
        });

        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeMagicEye', false);
          anything.save();
        });
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('askForWallet', false);
          anything.save();
        });
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('askForDrugs', false);
          anything.save();
        });

        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('bribeKid', false);
          anything.save();
        });
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('do29Seconds', false);
          anything.save();
        });

        this.transitionTo('party');
      }
    }

  });
});