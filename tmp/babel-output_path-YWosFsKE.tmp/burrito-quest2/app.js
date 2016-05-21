define('burrito-quest2/app', ['exports', 'ember', 'burrito-quest2/resolver', 'ember-load-initializers', 'burrito-quest2/config/environment'], function (exports, _ember, _burritoQuest2Resolver, _emberLoadInitializers, _burritoQuest2ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _burritoQuest2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _burritoQuest2ConfigEnvironment['default'].podModulePrefix,
    Resolver: _burritoQuest2Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _burritoQuest2ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});