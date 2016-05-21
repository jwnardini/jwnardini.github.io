define('burrito-quest2/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'burrito-quest2/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _burritoQuest2ConfigEnvironment) {

  var name = _burritoQuest2ConfigEnvironment['default'].APP.name;
  var version = _burritoQuest2ConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});