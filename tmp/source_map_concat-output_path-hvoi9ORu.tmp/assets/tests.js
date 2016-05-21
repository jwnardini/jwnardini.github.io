define('burrito-quest2/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('burrito-quest2/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('burrito-quest2/tests/components/inventory-display.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/inventory-display.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/inventory-display.js should pass jshint.');
  });
});
define('burrito-quest2/tests/components/kegstand-1.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/kegstand-1.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/kegstand-1.js should pass jshint.');
  });
});
define('burrito-quest2/tests/components/start-screen.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/start-screen.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/start-screen.js should pass jshint.');
  });
});
define('burrito-quest2/tests/components/talk-to-steve.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/talk-to-steve.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/talk-to-steve.js should pass jshint.');
  });
});
define('burrito-quest2/tests/helpers/create-offline-ref', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = createOfflineRef;

  /**
   * Creates an offline Firebase reference with optional initial data and url.
   *
   * Be sure to `stubFirebase()` and `unstubFirebase()` in your tests!
   *
   * @param  {Object} [initialData]
   * @param  {String} [url]
   * @return {Firebase}
   */

  function createOfflineRef(initialData) {
    var url = arguments.length <= 1 || arguments[1] === undefined ? 'https://emberfire-tests.firebaseio.com' : arguments[1];

    if (!_firebase['default']._unStub) {
      throw new Error('Please use stubFirebase() before calling this method');
    }

    var ref = new _firebase['default'](url);
    _firebase['default'].goOffline(); // must be called after the ref is created

    if (initialData) {
      ref.set(initialData);
    }

    return ref;
  }
});
define('burrito-quest2/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('burrito-quest2/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
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
define('burrito-quest2/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('burrito-quest2/tests/helpers/replace-app-ref', ['exports'], function (exports) {
  exports['default'] = replaceAppRef;
  /**
   * Updates the supplied app adapter's Firebase reference.
   *
   * @param  {Ember.Application} app
   * @param  {Firebase} ref
   * @param  {String} [model]  The model, if overriding a model specific adapter
   */

  function replaceAppRef(app, ref) {
    var model = arguments.length <= 2 || arguments[2] === undefined ? 'application' : arguments[2];

    var store = app.__container__.lookup('service:store');
    var adapter = store.adapterFor(model);

    adapter._ref = ref;
    adapter._queueFlushDelay = false;
  }
});
define('burrito-quest2/tests/helpers/resolver', ['exports', 'burrito-quest2/resolver', 'burrito-quest2/config/environment'], function (exports, _burritoQuest2Resolver, _burritoQuest2ConfigEnvironment) {

  var resolver = _burritoQuest2Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: _burritoQuest2ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _burritoQuest2ConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('burrito-quest2/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('burrito-quest2/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('burrito-quest2/tests/helpers/stub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = stubFirebase;

  /**
   * When a reference is in offline mode it will not call any callbacks
   * until it goes online and resyncs. The ref will have already
   * updated its internal cache with the changed values so we shortcut
   * the process and call the supplied callbacks immediately (asynchronously).
   */

  function stubFirebase() {

    // check for existing stubbing
    if (!_firebase['default']._unStub) {

      var originalSet = _firebase['default'].prototype.set;
      var originalUpdate = _firebase['default'].prototype.update;
      var originalRemove = _firebase['default'].prototype.remove;

      _firebase['default']._unStub = function () {
        _firebase['default'].prototype.set = originalSet;
        _firebase['default'].prototype.update = originalUpdate;
        _firebase['default'].prototype.remove = originalRemove;
      };

      _firebase['default'].prototype.set = function (data, cb) {
        originalSet.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].prototype.update = function (data, cb) {
        originalUpdate.call(this, data);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };

      _firebase['default'].prototype.remove = function (cb) {
        originalRemove.call(this);
        if (typeof cb === 'function') {
          setTimeout(cb, 0);
        }
      };
    }
  }
});
define('burrito-quest2/tests/helpers/unstub-firebase', ['exports', 'firebase'], function (exports, _firebase) {
  exports['default'] = unstubFirebase;

  function unstubFirebase() {
    if (typeof _firebase['default']._unStub === 'function') {
      _firebase['default']._unStub();
      delete _firebase['default']._unStub;
    }
  }
});
define('burrito-quest2/tests/integration/components/inventory-display-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('inventory-display', 'Integration | Component | inventory display', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 21
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'inventory-display', ['loc', [null, [1, 0], [1, 21]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'inventory-display', [], [], 0, null, ['loc', [null, [2, 4], [4, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burrito-quest2/tests/integration/components/inventory-display-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/inventory-display-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/inventory-display-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/integration/components/kegstand-1-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('kegstand-1', 'Integration | Component | kegstand 1', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 14
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'kegstand-1', ['loc', [null, [1, 0], [1, 14]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'kegstand-1', [], [], 0, null, ['loc', [null, [2, 4], [4, 19]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burrito-quest2/tests/integration/components/kegstand-1-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/kegstand-1-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/kegstand-1-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/integration/components/start-screen-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('start-screen', 'Integration | Component | start screen', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 16
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'start-screen', ['loc', [null, [1, 0], [1, 16]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'start-screen', [], [], 0, null, ['loc', [null, [2, 4], [4, 21]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burrito-quest2/tests/integration/components/start-screen-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/start-screen-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/start-screen-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/integration/components/talk-to-steve-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('talk-to-steve', 'Integration | Component | talk to steve', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 17
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'talk-to-steve', ['loc', [null, [1, 0], [1, 17]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'fragmentReason': false,
            'revision': 'Ember@2.4.5',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.5',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'talk-to-steve', [], [], 0, null, ['loc', [null, [2, 4], [4, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burrito-quest2/tests/integration/components/talk-to-steve-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration/components/talk-to-steve-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/talk-to-steve-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/models/game.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/game.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/game.js should pass jshint.\nmodels/game.js: line 4, col 16, \'DS\' is not defined.\nmodels/game.js: line 5, col 16, \'DS\' is not defined.\nmodels/game.js: line 6, col 15, \'DS\' is not defined.\nmodels/game.js: line 7, col 16, \'DS\' is not defined.\nmodels/game.js: line 8, col 19, \'DS\' is not defined.\nmodels/game.js: line 9, col 17, \'DS\' is not defined.\nmodels/game.js: line 10, col 17, \'DS\' is not defined.\nmodels/game.js: line 11, col 13, \'DS\' is not defined.\nmodels/game.js: line 12, col 16, \'DS\' is not defined.\n\n9 errors');
  });
});
define('burrito-quest2/tests/models/item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/item.js should pass jshint.\nmodels/item.js: line 4, col 9, \'DS\' is not defined.\nmodels/item.js: line 5, col 9, \'DS\' is not defined.\nmodels/item.js: line 6, col 10, \'DS\' is not defined.\n\n3 errors');
  });
});
define('burrito-quest2/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('burrito-quest2/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/approach-randy-backyard.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/approach-randy-backyard.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/approach-randy-backyard.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/ask-about-randy1.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/ask-about-randy1.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ask-about-randy1.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/ask-about-randy2.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/ask-about-randy2.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ask-about-randy2.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/ask-about-randy3.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/ask-about-randy3.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ask-about-randy3.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/ask-for-drugs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/ask-for-drugs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ask-for-drugs.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/ask-for-wallet.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/ask-for-wallet.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/ask-for-wallet.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/bribe-kid.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/bribe-kid.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bribe-kid.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/do-28-seconds.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/do-28-seconds.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/do-28-seconds.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/do-29-seconds.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/do-29-seconds.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/do-29-seconds.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/do-kegstand-til-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/do-kegstand-til-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/do-kegstand-til-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/enter-hospital-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/enter-hospital-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/enter-hospital-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/enter-hospital.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/enter-hospital.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/enter-hospital.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/follow-randy-on-foot.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/follow-randy-on-foot.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/follow-randy-on-foot.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/gurney-distract-magic-eye.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney-distract-magic-eye.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney-distract-magic-eye.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/gurney-distract-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney-distract-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney-distract-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/gurney-run-for-it.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney-run-for-it.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney-run-for-it.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/gurney-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/gurney.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/gurney.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/gurney.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/kegstand.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/kegstand.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/kegstand.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/mimic-bro-voice.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/mimic-bro-voice.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/mimic-bro-voice.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/party.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/party.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/party.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/peek-from-microwave.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/peek-from-microwave.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/peek-from-microwave.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/question-one-right.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question-one-right.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question-one-right.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/question-three-right.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question-three-right.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question-three-right.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/question-two-right.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question-two-right.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question-two-right.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/question-wrong.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/question-wrong.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/question-wrong.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/room-drugs-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room-drugs-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room-drugs-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/room-drugs-slingshot.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room-drugs-slingshot.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room-drugs-slingshot.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/room-no-items-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room-no-items-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room-no-items-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/room-slingshot-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room-slingshot-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room-slingshot-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/room-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/room-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/room-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/show-friend-magic-eye.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/show-friend-magic-eye.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/show-friend-magic-eye.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/steal-bike-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/steal-bike-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/steal-bike-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/steal-cops-gun-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/steal-cops-gun-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/steal-cops-gun-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/take-drugs-death.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/take-drugs-death.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/take-drugs-death.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/talk-to-steve.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/talk-to-steve.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/talk-to-steve.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair-distract-magic-eye.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair-distract-magic-eye.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair-distract-magic-eye.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair-distract-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair-distract-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair-distract-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair-run-for-it-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair-run-for-it-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair-run-for-it-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair-run-for-it.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair-run-for-it.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair-run-for-it.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair-trophy.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair-trophy.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair-trophy.js should pass jshint.');
  });
});
define('burrito-quest2/tests/routes/wheelchair.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/wheelchair.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/wheelchair.js should pass jshint.');
  });
});
define('burrito-quest2/tests/services/inventory.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - services/inventory.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/inventory.js should pass jshint.');
  });
});
define('burrito-quest2/tests/test-helper', ['exports', 'burrito-quest2/tests/helpers/resolver', 'ember-qunit'], function (exports, _burritoQuest2TestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_burritoQuest2TestsHelpersResolver['default']);
});
define('burrito-quest2/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/models/game-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('game', 'Unit | Model | game', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('burrito-quest2/tests/unit/models/game-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/game-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/game-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/models/item-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('item', 'Unit | Model | item', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('burrito-quest2/tests/unit/models/item-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models/item-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/item-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/approach-randy-backyard-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:approach-randy-backyard', 'Unit | Route | approach randy backyard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/approach-randy-backyard-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/approach-randy-backyard-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/approach-randy-backyard-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy1-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ask-about-randy1', 'Unit | Route | ask about randy1', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy1-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/ask-about-randy1-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ask-about-randy1-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy2-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ask-about-randy2', 'Unit | Route | ask about randy2', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy2-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/ask-about-randy2-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ask-about-randy2-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy3-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ask-about-randy3', 'Unit | Route | ask about randy3', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/ask-about-randy3-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/ask-about-randy3-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ask-about-randy3-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/ask-for-drugs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ask-for-drugs', 'Unit | Route | ask for drugs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/ask-for-drugs-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/ask-for-drugs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ask-for-drugs-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/ask-for-wallet-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:ask-for-wallet', 'Unit | Route | ask for wallet', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/ask-for-wallet-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/ask-for-wallet-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/ask-for-wallet-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/bribe-kid-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:bribe-kid', 'Unit | Route | bribe kid', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/bribe-kid-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/bribe-kid-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bribe-kid-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/do-28-seconds-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:do-28-seconds', 'Unit | Route | do 28 seconds', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/do-28-seconds-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/do-28-seconds-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/do-28-seconds-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/do-29-seconds-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:do-29-seconds', 'Unit | Route | do 29 seconds', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/do-29-seconds-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/do-29-seconds-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/do-29-seconds-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/do-kegstand-til-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:do-kegstand-til-death', 'Unit | Route | do kegstand til death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/do-kegstand-til-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/do-kegstand-til-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/do-kegstand-til-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/enter-hospital-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:enter-hospital-death', 'Unit | Route | enter hospital death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/enter-hospital-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/enter-hospital-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/enter-hospital-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/enter-hospital-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:enter-hospital', 'Unit | Route | enter hospital', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/enter-hospital-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/enter-hospital-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/enter-hospital-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/follow-randy-on-foot-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:follow-randy-on-foot', 'Unit | Route | follow randy on foot', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/follow-randy-on-foot-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/follow-randy-on-foot-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/follow-randy-on-foot-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/gurney-distract-magic-eye-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gurney-distract-magic-eye', 'Unit | Route | gurney distract magic eye', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/gurney-distract-magic-eye-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/gurney-distract-magic-eye-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gurney-distract-magic-eye-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/gurney-distract-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gurney-distract-trophy', 'Unit | Route | gurney distract trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/gurney-distract-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/gurney-distract-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gurney-distract-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/gurney-run-for-it-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gurney-run-for-it', 'Unit | Route | gurney run for it', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/gurney-run-for-it-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/gurney-run-for-it-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gurney-run-for-it-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/gurney-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gurney', 'Unit | Route | gurney', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/gurney-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/gurney-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gurney-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/gurney-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:gurney-trophy', 'Unit | Route | gurney trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/gurney-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/gurney-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/gurney-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/hospital-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:hospital', 'Unit | Route | hospital', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/hospital-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/hospital-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/hospital-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/house-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:house', 'Unit | Route | house', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/house-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/house-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/house-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/kegstand-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:kegstand', 'Unit | Route | kegstand', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/kegstand-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/kegstand-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/kegstand-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/mimic-bro-voice-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:mimic-bro-voice', 'Unit | Route | mimic bro voice', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/mimic-bro-voice-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/mimic-bro-voice-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/mimic-bro-voice-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/party-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:party', 'Unit | Route | party', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/party-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/party-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/party-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/peek-from-microwave-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:peek-from-microwave', 'Unit | Route | peek from microwave', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/peek-from-microwave-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/peek-from-microwave-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/peek-from-microwave-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/question-one-right-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:question-one-right', 'Unit | Route | question one right', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/question-one-right-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/question-one-right-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-one-right-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/question-three-right-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:question-three-right', 'Unit | Route | question three right', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/question-three-right-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/question-three-right-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-three-right-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/question-two-right-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:question-two-right', 'Unit | Route | question two right', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/question-two-right-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/question-two-right-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-two-right-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/question-wrong-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:question-wrong', 'Unit | Route | question wrong', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/question-wrong-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/question-wrong-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/question-wrong-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/room-drugs-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:room-drugs-death', 'Unit | Route | room drugs death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/room-drugs-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/room-drugs-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-drugs-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/room-drugs-slingshot-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:room-drugs-slingshot', 'Unit | Route | room drugs slingshot', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/room-drugs-slingshot-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/room-drugs-slingshot-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-drugs-slingshot-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/room-no-items-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:room-no-items-death', 'Unit | Route | room no items death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/room-no-items-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/room-no-items-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-no-items-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/room-slingshot-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:room-slingshot-death', 'Unit | Route | room slingshot death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/room-slingshot-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/room-slingshot-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-slingshot-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/room-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:room-trophy', 'Unit | Route | room trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/room-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/room-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/room-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/show-friend-magic-eye-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:show-friend-magic-eye', 'Unit | Route | show friend magic eye', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/show-friend-magic-eye-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/show-friend-magic-eye-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/show-friend-magic-eye-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/steal-bike-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:steal-bike-death', 'Unit | Route | steal bike death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/steal-bike-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/steal-bike-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/steal-bike-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/steal-cops-gun-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:steal-cops-gun-death', 'Unit | Route | steal cops gun death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/steal-cops-gun-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/steal-cops-gun-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/steal-cops-gun-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/take-drugs-death-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:take-drugs-death', 'Unit | Route | take drugs death', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/take-drugs-death-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/take-drugs-death-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/take-drugs-death-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/take-magic-eye-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:take-magic-eye', 'Unit | Route | take magic eye', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/take-magic-eye-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/take-magic-eye-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/take-magic-eye-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/take-sunglasses-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:take-sunglasses', 'Unit | Route | take sunglasses', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/take-sunglasses-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/take-sunglasses-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/take-sunglasses-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/talk-to-steve-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:talk-to-steve', 'Unit | Route | talk to steve', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/talk-to-steve-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/talk-to-steve-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/talk-to-steve-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-distract-magic-eye-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair-distract-magic-eye', 'Unit | Route | wheelchair distract magic eye', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-distract-magic-eye-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-distract-magic-eye-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-distract-magic-eye-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-distract-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair-distract-trophy', 'Unit | Route | wheelchair distract trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-distract-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-distract-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-distract-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-run-for-it-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair-run-for-it', 'Unit | Route | wheelchair run for it', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-run-for-it-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-run-for-it-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-run-for-it-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-run-for-it-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair-run-for-it-trophy', 'Unit | Route | wheelchair run for it trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-run-for-it-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-run-for-it-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-run-for-it-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair', 'Unit | Route | wheelchair', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-trophy-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:wheelchair-trophy', 'Unit | Route | wheelchair trophy', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('burrito-quest2/tests/unit/routes/wheelchair-trophy-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/wheelchair-trophy-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/wheelchair-trophy-test.js should pass jshint.');
  });
});
define('burrito-quest2/tests/unit/services/inventory-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:inventory', 'Unit | Service | inventory', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('burrito-quest2/tests/unit/services/inventory-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/services/inventory-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/inventory-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('burrito-quest2/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map