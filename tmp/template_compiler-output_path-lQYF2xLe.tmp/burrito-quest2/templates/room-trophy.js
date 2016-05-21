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
          "line": 10,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/room-trophy.hbs"
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
      var el3 = dom.createTextNode("You follow Randy into the room. It's a small examination room with only random and assorted medical supplies inside. You close the door behind you, and Randy hears the latch. He turns towards you, and screams \"I THOUGHT YOU WERE DEAD! I WATCHED YOU DIE.\" You're blocking the door, he has nowhere to run this time. Randy quickly picks up the phone and dials security. \"HELP! THERE'S A WOMAN IN HERE TRYING TO KILL-\" you cut him off with a swift blow to the head with your beloved kegstand trophy! You're standing over Randy's unconscious body.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("You take off his jacket, putting it on to conceal your identity. You spot a wheelchair in the corner, and a gurney. WHAT DO?");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Load Randy into wheelchair.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Load Randy into gurney.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
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
      var element0 = dom.childAt(fragment, [0]);
      var element1 = dom.childAt(element0, [6]);
      var element2 = dom.childAt(element0, [9]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createElementMorph(element2);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["wheelchairTrophy"],[],["loc",[null,[4,27],[4,56]]]],
      ["element","action",["gurneyTrophy"],[],["loc",[null,[5,27],[5,52]]]],
      ["content","inventory-display",["loc",[null,[8,2],[8,23]]]]
    ],
    locals: [],
    templates: []
  };
}()));