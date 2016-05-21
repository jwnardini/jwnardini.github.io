export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "wrong-type",
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
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/components/start-screen.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("You are Wanda from the first Burrito Quest. Randy has wronged you. You heard that Randy was at a party thrown by Steve the ambulance driver. You have just arrived at the party. WHAT DO?\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","game-btn");
      var el2 = dom.createTextNode("Talk to Steve");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","game-btn");
      var el2 = dom.createTextNode("Do a kegstand!");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [3]);
      var element1 = dom.childAt(fragment, [6]);
      var morphs = new Array(2);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createElementMorph(element1);
      return morphs;
    },
    statements: [
      ["element","action",["talkToSteve"],[],["loc",[null,[3,25],[3,49]]]],
      ["element","action",["doKegstand"],[],["loc",[null,[4,25],[4,48]]]]
    ],
    locals: [],
    templates: []
  };
}()));