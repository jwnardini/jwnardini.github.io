define('burrito-quest2/routes/kegstand', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      do28Seconds: function do28Seconds() {
        this.set('do28Seconds', true);
        this.transitionTo('do-28-seconds');
      },
      do29Seconds: function do29Seconds() {
        var trophy = { name: "Kegstand Trophy", image: "/assets/images/trophy.png" };
        this.get('inventory').add(trophy);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('do29Seconds', true);
          anything.save();
        });
        this.transitionTo('do-29-seconds');
      },
      doKegstandTilDeath: function doKegstandTilDeath() {
        this.set('doKegstandTilDeath', true);
        this.transitionTo('do-kegstand-til-death');
      }

    }

  });
});