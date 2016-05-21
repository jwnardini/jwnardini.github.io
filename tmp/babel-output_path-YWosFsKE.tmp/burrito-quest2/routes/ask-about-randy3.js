define('burrito-quest2/routes/ask-about-randy3', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),

    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      showFriendMagicEye: function showFriendMagicEye() {
        this.set('showFriendMagicEye', true);
        this.transitionTo('show-friend-magic-eye');
      },
      mimicBroVoice: function mimicBroVoice() {
        this.set('mimicBroVoice', true);
        this.transitionTo('mimic-bro-voice');
      }
    }
  });
});