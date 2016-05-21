define('burrito-quest2/routes/peek-from-microwave', ['exports', 'ember'], function (exports, _ember) {
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
      },
      askAboutRandy3: function askAboutRandy3() {
        this.set('askAboutRandy3', true);
        this.transitionTo('ask-about-randy3');
      }
    }
  });
});