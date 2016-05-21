define('burrito-quest2/routes/ask-about-randy2', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      askForWallet: function askForWallet() {
        var stevesWallet = { name: "Steve the Ambulance Driver's Wallet", image: "/assets/images/wallet.png" };
        this.get('inventory').add(stevesWallet);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('askForWallet', true);
          anything.save();
        });
        this.transitionTo('ask-for-wallet');
      },
      approachRandyBackyard: function approachRandyBackyard() {
        this.set('approachRandyBackyard', true);
        this.transitionTo('approach-randy-backyard');
      },
      peekFromMicrowave: function peekFromMicrowave() {
        this.set('peekFromMicrowave', true);
        this.transitionTo('peek-from-microwave');
      }
    }
  });
});