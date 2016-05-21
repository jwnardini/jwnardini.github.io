define('burrito-quest2/routes/party', ['exports', 'ember'], function (exports, _ember) {
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
      doKegstand: function doKegstand() {
        this.store.findRecord('game', 0).then(function (anything) {
          anything.set('doKegstand', true);
          anything.save();
        });
        this.transitionTo('kegstand');
      }
    }
  });
});