define('burrito-quest2/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'burrito-quest2/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _burritoQuest2ConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_burritoQuest2ConfigEnvironment['default'].APP.name, _burritoQuest2ConfigEnvironment['default'].APP.version)
  };
});