define('burrito-quest2/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'burrito-quest2/tests/helpers/start-app', 'burrito-quest2/tests/helpers/destroy-app'], function (exports, _qunit, _burritoQuest2TestsHelpersStartApp, _burritoQuest2TestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _burritoQuest2TestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _burritoQuest2TestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});