define('burrito-quest2/routes/ask-for-drugs', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),
    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      takeDrugsDeath: function takeDrugsDeath() {
        this.transitionTo('take-drugs-death');
      },
      askAboutRandy2: function askAboutRandy2() {
        this.set('askAboutRandy2', true);
        this.transitionTo('ask-about-randy2');
      },
      askForWallet: function askForWallet() {
        var stevesWallet = { name: "Steve the Ambulance Driver's Wallet", image: "/assets/images/wallet.png" };
        this.get('inventory').add(stevesWallet);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('askForWallet', true);
          anything.save();
        });
        this.transitionTo('ask-for-wallet');
      }

    }
  });
});