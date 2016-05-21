export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "burrito-quest2/templates/do-29-seconds.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","game-btn");
          var el2 = dom.createTextNode("Steal sunglasses");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["element","action",["takeSunglasses"],[],["loc",[null,[8,27],[8,54]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 2
          },
          "end": {
            "line": 10,
            "column": 2
          }
        },
        "moduleName": "burrito-quest2/templates/do-29-seconds.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","unless",[["get","game.takeSunglasses",["loc",[null,[7,12],[7,31]]]]],[],0,null,["loc",[null,[7,2],[9,13]]]]
      ],
      locals: ["game"],
      templates: [child0]
    };
  }());
  var child1 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "burrito-quest2/templates/do-29-seconds.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1,"class","game-btn");
          var el2 = dom.createTextNode("Steal Magic Eye book");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [
          ["element","action",["takeMagicEye"],[],["loc",[null,[13,27],[13,52]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 11,
            "column": 2
          },
          "end": {
            "line": 15,
            "column": 2
          }
        },
        "moduleName": "burrito-quest2/templates/do-29-seconds.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","unless",[["get","game.takeMagicEye",["loc",[null,[12,12],[12,29]]]]],[],0,null,["loc",[null,[12,2],[14,13]]]]
      ],
      locals: ["game"],
      templates: [child0]
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes"
        ]
      },
      "revision": "Ember@2.4.5",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 22,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/do-29-seconds.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","col-sm-8");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("You are propped upside-down over the keg by the protagonist from the first Burrito Quest. A crowd forms around you and starts counting up from 1 as the keg nozzle is shoved into your mouth and a mystery hand triggers open the faucet. The beer flows into your mouth and you hear the crowd chant \"...27!...28!...29!\" Right on 29, the protagonist lets you down and the crowd cheers. You hear a random partygoer exclaim \"Wow, you tied the house record!! Here's take this trophy. ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("strong");
      var el4 = dom.createTextNode("TROPHY ACQUIRED!");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode(" The protagonist approaches the keg to do a kegstand himself. As he's flipped over the keg, you notice a Magic Eye book and set of sunglasses dangling from his pockets. WHAT DO? ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Talk to Steve");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Ask protagonist about Randy");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  \n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","col-sm-4");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element2 = dom.childAt(fragment, [1]);
      var element3 = dom.childAt(element2, [5]);
      var element4 = dom.childAt(element2, [11]);
      var morphs = new Array(5);
      morphs[0] = dom.createElementMorph(element3);
      morphs[1] = dom.createMorphAt(element2,8,8);
      morphs[2] = dom.createMorphAt(element2,9,9);
      morphs[3] = dom.createElementMorph(element4);
      morphs[4] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["talkToSteve"],[],["loc",[null,[5,27],[5,51]]]],
      ["block","each",[["get","model",["loc",[null,[6,10],[6,15]]]]],[],0,null,["loc",[null,[6,2],[10,11]]]],
      ["block","each",[["get","model",["loc",[null,[11,10],[11,15]]]]],[],1,null,["loc",[null,[11,2],[15,11]]]],
      ["element","action",["askAboutRandy1"],[],["loc",[null,[16,27],[16,54]]]],
      ["content","inventory-display",["loc",[null,[20,2],[20,23]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));