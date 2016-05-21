define('burrito-quest2/services/firebase', ['exports', 'emberfire/services/firebase', 'burrito-quest2/config/environment'], function (exports, _emberfireServicesFirebase, _burritoQuest2ConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _burritoQuest2ConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});