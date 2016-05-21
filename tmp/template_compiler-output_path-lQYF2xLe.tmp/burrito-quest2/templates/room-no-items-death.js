export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
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
        "moduleName": "burrito-quest2/templates/room-no-items-death.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","text-center");
        var el2 = dom.createElement("button");
        dom.setAttribute(el2,"class","game-btn play-again");
        var el3 = dom.createTextNode("PLAY AGAIN");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "fragmentReason": {
        "name": "missing-wrapper",
        "problems": [
          "multiple-nodes",
          "wrong-type"
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
          "line": 6,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/room-no-items-death.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You follow Randy into the room. It's a small examination room with only random and assorted medical supplies inside. You close the door behind you, and Randy hears the latch. He turns towards you, and screams \"I THOUGHT YOU WERE DEAD! I WATCHED YOU DIE.\" You're blocking the door, he has nowhere to run this time. You grin an evil grin and respond \"And now I'll watch YOU die.\" Without a weapon, you have no choice but try and kill Randy with your bare hands. You wrap his hands around his neck. There is a struggle. In a desperate attempt to gain the upper hand, Randy reaches for his hardcover copy of Charlotte's Web and bludgeons you to death. Right before you take your last breath, you wheeze \"now...I'll never...get my..burrito back!\" ");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h3");
      dom.setAttribute(el1,"class","game-over");
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
      morphs[0] = dom.createMorphAt(fragment,8,8,contextualElement);
      return morphs;
    },
    statements: [
      ["block","link-to",["index"],[],0,null,["loc",[null,[5,0],[5,118]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));