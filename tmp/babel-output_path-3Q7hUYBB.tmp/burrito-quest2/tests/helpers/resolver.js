define('burrito-quest2/tests/helpers/resolver', ['exports', 'burrito-quest2/resolver', 'burrito-quest2/config/environment'], function (exports, _burritoQuest2Resolver, _burritoQuest2ConfigEnvironment) {

  var resolver = _burritoQuest2Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _burritoQuest2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _burritoQuest2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});