export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 15,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 65
          }
        },
        "moduleName": "burrito-quest2/templates/question-three-right.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1,"class","game-btn ");
        var el2 = dom.createTextNode("PLAY AGAIN");
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
          "line": 16,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/question-three-right.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\"Wow Wanda... maybe you do know me more than I thought. If you promise to let me go, I guess I can make you a burrito.\" You nervously nod your head, and Randy reluctantly accepts this as a promise. He begins constructing your burrito from the ingredients you've sprawled across the counter. He pulls out a tortilla, and starts plopping on refried beans and guacamole.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Randy asks what he percieves to be an important question: \"Do you want me to cook this ground beef? It's raw.\"");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\"No, I like it that way. PUT IT ON.\"");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\"....OK.\" Randy spreads the raw ground beef onto the burrito pile. \"Do you have a knife for these onions and tomatoes?\"");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\"You think I'm an idiot? I'm not giving you a knife. MAKE IT WORK.\" you reply, waving the scissors in Randy's face. Randy nervously breaks the onions and tomatoes up in his hands, tomato juice splashing all over the counter. You offer Randy a paper towel, which he quizzically accepts as a peace offering. As he wipes his hands off, he looks at his mound of gross-looking ingredients, and with a defeated tone asks \"How's this?\"");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("You shed a single tear. \"It's perfect. WRAP IT UP.\"");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Randy flinches at your response, but complies. He starts the wrapping process, ingredients bleeding out the sides of the overloaded burrito nightmare. With effort, he manages to contain the innards fairly well. It actually kinda looks like a burrito! Randy wraps the tomato juice-soaked paper towel around his creation for presentation, and offers it to you. His hands are shaking.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("\"Good. Gooooood. You've done well Randall. I will now set you free.\" You open a cupboard and retrieve your trusty cricket bat. The last thing Randy ever sees is you swinging for the fences at his face. He collapses on the ground. You open the spacious cabinet under your kitchen sink, and start stuffing Randy's body inside. He barely fits. You close the cabinet door, and see the pool of blood on the kitchen floor. You're too lazy to deal with this mess now, and instead retrieve a few throw-pillows from your couch and place them over the mess.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("p");
      var el2 = dom.createTextNode("Phew, what an exhausting night! You don't even have the energy to eat Randy's burrito. Perhaps a quick nap will make you hungry! Scissors still in one hand, burrito in the other, you dive into bed and close your eyes. Your dreams are incoherent.");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("hr");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h1");
      dom.setAttribute(el1,"class","text-center game-over");
      var el2 = dom.createTextNode("CONGRATULATIONS!!!!");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("h2");
      dom.setAttribute(el1,"class","text-center game-over");
      var el2 = dom.createTextNode("YOU WIN");
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
      morphs[0] = dom.createMorphAt(fragment,26,26,contextualElement);
      return morphs;
    },
    statements: [
      ["block","link-to",["index"],[],0,null,["loc",[null,[15,0],[15,77]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));