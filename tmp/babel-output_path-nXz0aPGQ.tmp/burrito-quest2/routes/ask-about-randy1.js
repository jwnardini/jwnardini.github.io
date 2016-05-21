define('burrito-quest2/routes/ask-about-randy1', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      talkToSteve: function talkToSteve() {
        this.set('talkToSteve', true);
        this.transitionTo('talk-to-steve');
      },
      takeMagicEye: function takeMagicEye() {
        var book = { name: "Magic Eye Book", image: "/assets/images/book.png" };
        this.get('inventory').add(book);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeMagicEye', true);
          anything.save();
        });
      },
      takeSunglasses: function takeSunglasses() {
        var sunglasses = { name: "Sunglasses", image: "/assets/images/sunglasses.png" };
        this.get('inventory').add(sunglasses);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeSunglasses', true);
          anything.save();
        });
      }
    }
  });
});