System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js"
  },
  "buildCSS": false
});

System.config({
  "map": {
    "d3": "github:mbostock/d3@3.5.6",
    "html": "github:Hypercubed/systemjs-plugin-html@vulcanize",
    "polymer": "github:Polymer/polymer@1.0.6",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.7",
    "github:Hypercubed/systemjs-plugin-html@master": {
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.7"
    },
    "github:Hypercubed/systemjs-plugin-html@vulcanize": {
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.7"
    }
  }
});

