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
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
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
          var el2 = dom.createTextNode("Bribe the kid for his slingshot");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [
          ["element","action",["bribeKid"],[],["loc",[null,[6,27],[6,48]]]]
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
            "line": 4,
            "column": 2
          },
          "end": {
            "line": 8,
            "column": 2
          }
        },
        "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
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
        ["block","if",[["get","game.askForWallet",["loc",[null,[5,8],[5,25]]]]],[],0,null,["loc",[null,[5,2],[7,9]]]]
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
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 13,
              "column": 2
            }
          },
          "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
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
          var el2 = dom.createTextNode("Enter Hospital");
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
          ["element","action",["enterHospital"],[],["loc",[null,[12,27],[12,53]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.5",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 2
            },
            "end": {
              "line": 15,
              "column": 2
            }
          },
          "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
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
          var el2 = dom.createTextNode("Enter Hospital");
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
          ["element","action",["enterHospitalDeath"],[],["loc",[null,[14,27],[14,58]]]]
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
            "line": 10,
            "column": 2
          },
          "end": {
            "line": 16,
            "column": 2
          }
        },
        "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
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
        ["block","if",[["get","game.takeSunglasses",["loc",[null,[11,8],[11,27]]]]],[],0,1,["loc",[null,[11,2],[15,9]]]]
      ],
      locals: ["game"],
      templates: [child0, child1]
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
          "line": 21,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/follow-randy-on-foot.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","col-sm-8");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("You follow Randy on foot, being sure to hang back so he doesn't notice that it's you half a block back. He approaches the hospital on foot, and enters a wing. The sign above the entrance reads \"CHILDREN'S CANCER WARD.\" Hanging around outside of the entrance is a kid with cancer holding a slingshot and a cop with a shiny pistol. WHAT DO?");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Bribe the cop for his shiny gun");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
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
      var element3 = dom.childAt(fragment, [0]);
      var element4 = dom.childAt(element3, [7]);
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(element3,5,5);
      morphs[1] = dom.createElementMorph(element4);
      morphs[2] = dom.createMorphAt(element3,10,10);
      morphs[3] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],0,null,["loc",[null,[4,2],[8,11]]]],
      ["element","action",["stealCopsGun"],[],["loc",[null,[9,27],[9,52]]]],
      ["block","each",[["get","model",["loc",[null,[10,10],[10,15]]]]],[],1,null,["loc",[null,[10,2],[16,11]]]],
      ["content","inventory-display",["loc",[null,[19,2],[19,23]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));