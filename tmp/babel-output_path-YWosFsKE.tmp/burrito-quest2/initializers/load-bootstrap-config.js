define('burrito-quest2/initializers/load-bootstrap-config', ['exports', 'burrito-quest2/config/environment', 'ember-bootstrap/config'], function (exports, _burritoQuest2ConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_burritoQuest2ConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});