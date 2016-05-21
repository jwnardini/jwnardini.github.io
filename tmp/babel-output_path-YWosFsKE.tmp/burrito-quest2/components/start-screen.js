define('burrito-quest2/components/start-screen', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    startScreen: false,
    talkToSteve: false,

    actions: {
      startGame: function startGame() {
        this.set('startScreen', true);
      },
      talkToSteve: function talkToSteve() {
        this.set('startScreen', false);
        this.set('talkToSteve', true);
      }

    }
  });
});