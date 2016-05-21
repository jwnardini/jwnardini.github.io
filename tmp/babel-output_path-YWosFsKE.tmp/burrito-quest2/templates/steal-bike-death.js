define("burrito-quest2/templates/steal-bike-death", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 106
            }
          },
          "moduleName": "burrito-quest2/templates/steal-bike-death.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "text-center");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "game-btn play-again");
          var el3 = dom.createTextNode("PLAY AGAIN");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "burrito-quest2/templates/steal-bike-death.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You decide that the best way to follow Randy on foot is to steal Steve the ambulance driver's bike and pedal at a walker's pace. You keep your distance from Randy surprisingly well. You look down at the handlebars and notice that Steve the ambulance driver's bike has a shiny bell on it. NEATO! You can't resist the temptation: you ring the bell. DING DING! Randy stops in his tracks, turns his head slowly, and notices that it's you, Wanda, on the bike. Randy points, and screams \"I THOUGHT YOU WERE DEAD!\" He starts sprinting away \"I WATCHED YOU DIE!\" You attempt to catch up to Randy, but holy crap he is really fast! He escapes into the night, and you never see him again.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        dom.setAttribute(el1, "class", "game-over");
        var el2 = dom.createTextNode("GAME OVER");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [5, 0], [5, 118]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});