define('burrito-quest2/routes/question-two-right', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    inventory: _ember['default'].inject.service(),
    model: function model() {
      return this.store.findAll('game');
    },

    actions: {
      questionWrong: function questionWrong() {
        this.transitionTo('question-wrong');
      },
      questionThreeRight: function questionThreeRight() {
        this.transitionTo('question-three-right');
      }
    }
  });
});