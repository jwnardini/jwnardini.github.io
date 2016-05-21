define('burrito-quest2/tests/helpers/start-app', ['exports', 'ember', 'burrito-quest2/app', 'burrito-quest2/config/environment'], function (exports, _ember, _burritoQuest2App, _burritoQuest2ConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _burritoQuest2ConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _burritoQuest2App['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});