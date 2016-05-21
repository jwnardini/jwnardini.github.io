define('burrito-quest2/routes/do-29-seconds', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      takeMagicEye: function takeMagicEye() {
        var book = { name: "Magic Eye Book", image: "/assets/images/book.png" };
        this.get('inventory').add(book);

        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeMagicEye', true);
          anything.save();
        });
      },
      takeSunglasses: function takeSunglasses() {
        var sunglasses = { name: "Sunglasses", image: "/assets/images/sunglasses.jpg" };
        this.get('inventory').add(sunglasses);
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('takeSunglasses', true);
          anything.save();
        });
      },
      talkToSteve: function talkToSteve() {
        this.set('talkToSteve', true);
        this.transitionTo('talk-to-steve');
      },
      askAboutRandy1: function askAboutRandy1() {
        this.set('askAboutRandy1', true);
        this.transitionTo('ask-about-randy1');
      }
    }
  });
});