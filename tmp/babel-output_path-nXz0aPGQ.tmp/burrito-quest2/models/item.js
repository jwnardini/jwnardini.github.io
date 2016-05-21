define('burrito-quest2/models/item', ['exports', 'ember-data/model'], function (exports, _emberDataModel) {
  exports['default'] = _emberDataModel['default'].extend({
    name: DS.attr(),
    have: DS.attr(),
    image: DS.attr()
  });
});