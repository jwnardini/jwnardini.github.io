export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.5",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "burrito-quest2/templates/components/form-element/vertical/select2.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("label");
        dom.setAttribute(el1,"class","control-label");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'for');
        morphs[1] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","for",["concat",[["subexpr","concat",[["get","elementId",["loc",[null,[2,47],[2,56]]]],"-",["get","name",["loc",[null,[2,61],[2,65]]]]],[],["loc",[null,[2,38],[2,67]]]]]]],
        ["content","label",["loc",[null,[2,69],[2,78]]]]
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
          "line": 9,
          "column": 0
        }
      },
      "moduleName": "burrito-quest2/templates/components/form-element/vertical/select2.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("div");
      var el2 = dom.createTextNode("\n\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
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
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
      morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["block","if",[["get","hasLabel",["loc",[null,[1,6],[1,14]]]]],[],0,null,["loc",[null,[1,0],[3,7]]]],
      ["inline","select-2",[],["id",["subexpr","concat",[["get","elementId",["loc",[null,[6,26],[6,35]]]],"-",["get","name",["loc",[null,[6,40],[6,44]]]]],[],["loc",[null,[6,18],[6,45]]]],"name",["subexpr","@mut",[["get","name",["loc",[null,[6,51],[6,55]]]]],[],[]],"content",["subexpr","@mut",[["get","choices",["loc",[null,[6,64],[6,71]]]]],[],[]],"optionValuePath",["subexpr","@mut",[["get","choiceValueProperty",["loc",[null,[6,88],[6,107]]]]],[],[]],"optionLabelPath",["subexpr","@mut",[["get","choiceLabelProperty",["loc",[null,[6,124],[6,143]]]]],[],[]],"value",["subexpr","@mut",[["get","value",["loc",[null,[6,150],[6,155]]]]],[],[]],"searchEnabled",false],["loc",[null,[6,4],[6,177]]]],
      ["inline","partial",["components/form-element/feedback-icon"],[],["loc",[null,[8,0],[8,51]]]]
    ],
    locals: [],
    templates: [child0]
  };
}()));