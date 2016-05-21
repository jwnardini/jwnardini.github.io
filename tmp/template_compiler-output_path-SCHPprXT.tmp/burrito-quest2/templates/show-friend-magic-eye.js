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
          "line": 12,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/show-friend-magic-eye.hbs"
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
      var el3 = dom.createTextNode("You suggestively pull out your Magic Eye book and start fanning the pages out in dudebro's direction. \"You wanna see a sailboat, sailor? All you gotta do is stare at this page.\" \"Sailboat?! My stepdad had a sailboat! Until he got his BUI, that is. I miss that sailboat.\" Dudebro's attention is drawn towards the book. You inconspicuously inquire \"So, which cup is Randy's?\" Dudebro doesn't respond; he is clearly engaged with finding that sailboat. You play it safe and spike all of the drinks; as long as Randy gets drugged, you are one step closer to your goal of revenge. \"Oh snap, there's the sailboat! I just had to cross my eyes a little bit. Wow, thanks for showing me this Magic Eye book, Wanda! Here, you can have it back now.\" Dudebro resumes with topping off the cocktails and returns to the backyard.");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("Dudebro offers a cup to Randy, and Randy politely declines. \"Sorry man\" says Randy, \"I gotta be at work in 30 minutes, I'm gonna have to pass. Does anybody else want this extra cocktail?\" \"I SURE AS HELL DO!\" exclaims Steve, the ambulance driver. \"I don't have to work til 8am tomorrow. I should be fine as long as this cocktail isn't drugged. HAHAHAHA ;)\" Steve chugs the whole drink in two gulps. ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("p");
      var el3 = dom.createTextNode("DAMMIT YOUR PLAN DIDN'T WORK. FOILED BY RANDY AGAIN. Randy looks at his watch \"Damn, I should probably leave now. Thanks again for inviting me, Steve the ambulance driver!\" Randy grabs his backpack and starts walking around to the front of the house. You'd better follow him quick before you lose him. WHAT DO?");
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
      var el3 = dom.createTextNode("Steal Steve's bike to follow Randy");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"class","game-btn");
      var el3 = dom.createTextNode("Follow Randy on foot");
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
      var element1 = dom.childAt(element0, [9]);
      var element2 = dom.childAt(element0, [12]);
      var morphs = new Array(3);
      morphs[0] = dom.createElementMorph(element1);
      morphs[1] = dom.createElementMorph(element2);
      morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
      return morphs;
    },
    statements: [
      ["element","action",["stealBike"],[],["loc",[null,[6,27],[6,49]]]],
      ["element","action",["followRandyOnFoot"],[],["loc",[null,[7,27],[7,57]]]],
      ["content","inventory-display",["loc",[null,[10,2],[10,23]]]]
    ],
    locals: [],
    templates: []
  };
}()));