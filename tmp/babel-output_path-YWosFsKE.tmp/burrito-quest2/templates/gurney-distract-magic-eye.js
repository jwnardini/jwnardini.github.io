define("burrito-quest2/templates/gurney-distract-magic-eye", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
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
        "moduleName": "burrito-quest2/templates/gurney-distract-magic-eye.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("The security guard is all like \"Oh damn I love Magic Eye books! Let me flip through this instead of making sure that you're not trying to smuggle one of our doctors out of this hospital in some half-assed Weekend at Bernie's-style scheme.\" Wow that was easy.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("You make your way back to your place, about 5 miles away (good thing your house is mostly downhill from the hospital). You push Randy through the front door, and deadbolt it behind you. You drag Randy out of the wheelchair and into the kitchen, and chain his ankle to the fridge. While you wait for Randy to wake up, you begin to arrange all sorts of burrito ingredients out on the counter, next to your beloved cactus. When Randy finally comes to, he begins to look around and eventually focuses in on you. You pull out a threatening pair of scissors and engage with your prisoner: \"Randy, it is time for you to pay for wronging me. You will now construct a most delicious burrito for me.\" Randy replies \"Wanda, how did I ever wrong you?\". \"Randy, do you remember March 23rd, 2012? It was on that day, that you threw away my burrito.\" \"Wanda, that was a crusty, half-eaten burrito, and it had been in the fridge for 2 weeks. It was covered in mold.\" \"I DON'T CARE IF IT HAD A MOLD HAT. YOU RUINED MY LIFE.\" \"Wanda, you need to let it go.\" \"Right after you fix this...\" \"I only lived with you for two weeks, I don't even know you.\" \"Well, I certainly know YOU. Inside and out.\" \"Oh really? Prove it.\"");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Randy asks his first Randy-related question:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("\"What is my last name?\"");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "game-btn");
        dom.setAttribute(el1, "type", "radio");
        dom.setAttribute(el1, "name", "button");
        var el2 = dom.createTextNode("Schmeckles");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "game-btn");
        dom.setAttribute(el1, "type", "radio");
        dom.setAttribute(el1, "name", "button");
        var el2 = dom.createTextNode("St.John-Smythe");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "game-btn");
        dom.setAttribute(el1, "type", "radio");
        dom.setAttribute(el1, "name", "button");
        var el2 = dom.createTextNode("Sanders");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [8]);
        var element1 = dom.childAt(fragment, [11]);
        var element2 = dom.childAt(fragment, [14]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createElementMorph(element1);
        morphs[2] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["element", "action", ["questionOneRight"], [], ["loc", [null, [7, 25], [7, 54]]]], ["element", "action", ["questionWrong"], [], ["loc", [null, [8, 25], [8, 51]]]], ["element", "action", ["questionWrong"], [], ["loc", [null, [9, 25], [9, 51]]]]],
      locals: [],
      templates: []
    };
  })());
});