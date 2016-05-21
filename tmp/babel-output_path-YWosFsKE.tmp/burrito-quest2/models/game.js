define('burrito-quest2/models/game', ['exports', 'ember-data/model'], function (exports, _emberDataModel) {
  exports['default'] = _emberDataModel['default'].extend({
    startScreen: DS.attr(),
    talkToSteve: DS.attr(),
    doKegstand: DS.attr(),
    askForDrugs: DS.attr(),
    takeSunglasses: DS.attr(),
    takeMagicEye: DS.attr(),
    askForWallet: DS.attr(),
    bribeKid: DS.attr(),
    do29Seconds: DS.attr()
  });
});