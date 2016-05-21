define("burrito-quest2/templates/steal-cops-gun-death", ["exports"], function (exports) {
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
          "moduleName": "burrito-quest2/templates/steal-cops-gun-death.hbs"
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
        "moduleName": "burrito-quest2/templates/steal-cops-gun-death.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You saunter up to the cop and attempt to distract him. \"Hey! Is that Nick Nolte across the street?\" The cop, unphased, replies \"Who is Nick Nolte?\" This upsets you. \"HAVEN'T YOU SEEN 48 HRS? WHAT KIND OF COP ARE YOU?\" You reach for the officer's shiny gun. He stops your attempt with an arm-bar counter and immediately tazes you. He hauls you into the backseat of his police cruiser, and slams the door. As he starts heading to the the police station, you spot Randy through a hospital window, reading to a group of cancer kids. You mutter under your breath \"Now I'll never get my burrito back.\" The cop hears you and says \"What's that about burritos?\" Defeated, you reply \"Nothing...\"");
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