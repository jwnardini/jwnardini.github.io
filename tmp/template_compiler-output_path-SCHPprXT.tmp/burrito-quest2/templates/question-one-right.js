export default Ember.HTMLBars.template((function() {
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
          "line": 7,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/question-one-right.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Well... you've been paying attention, haven't you? Surely if you know my last name, you can tell me:");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"class","game-over");
      var el2 = dom.createTextNode("What are the names of my two dogs?");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","game-btn");
      dom.setAttribute(el1,"type","radio");
      dom.setAttribute(el1,"name","button");
      var el2 = dom.createTextNode("Whiskey and Coke");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","game-btn");
      dom.setAttribute(el1,"type","radio");
      dom.setAttribute(el1,"name","button");
      var el2 = dom.createTextNode("Chicken and Waffles");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("button");
      dom.setAttribute(el1,"class","game-btn");
      dom.setAttribute(el1,"type","radio");
      dom.setAttribute(el1,"name","button");
      var el2 = dom.createTextNode("Mac and Cheese");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [4]);
      var element1 = dom.childAt(fragment, [7]);
      var element2 = dom.childAt(fragment, [10]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element0);
      morphs[1] = dom.createElementMorph(element1);
      morphs[2] = dom.createElementMorph(element2);
      return morphs;
    },
    statements: [
      ["element","action",["questionWrong"],[],["loc",[null,[4,25],[4,51]]]],
      ["element","action",["questionWrong"],[],["loc",[null,[5,25],[5,51]]]],
      ["element","action",["questionTwoRight"],[],["loc",[null,[6,25],[6,54]]]]
    ],
    locals: [],
    templates: []
  };
}()));