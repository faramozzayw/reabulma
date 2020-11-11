"use strict";
exports.__esModule = true;
exports.generate = void 0;
var Handlebars = require("handlebars");
var fs = require("fs");
var json = require("./testData.json");
var t =
	'\n    {{#unless react17}}\n    import React from "react";\n    {{/unless}}\n    import classnames from "classnames";\n    \n    import { Bulma } from "bulmaTypes";\n    import {\n    {{#each modifiers}}\n    \t{{#if this.hasFn}}\n        \tget{{this.name}}Modifiers,\n    \t{{/if}}\n    {{/each}}\n    } from "utils";\n    \n    export interface {{name}}Props<T> \n    \textends Bulma.Tag, \n        {{#each modifiers}}\n    \t\tBulma.{{this.name}},\n    \t{{/each}}\n        React.HTMLProps<T> {}\n    \n    export const {{name}}: React.FC<{{name}}Props<{{type}}>> = ({\n    \ttag = "{{defaultTag}}",\n    \t{{#each modifiers}}\n    \t\tis{{this.name}},\n    \t{{/each}}\n    \t...props\n    }) => {\n    \tconst className = classnames(\n    \t\t"{{componentClassName}}",\n    \t\t{\n                {{#each modifiers}}\n        \t\t\t{{#if this.hasFn}}\n                    \t...get{{this.name}}Modifiers({ is{{this.name}} }),\n                    {{else}}\n                     \t"{{this.className}}": is{{this.name}},\n                    {{/if}}\n      \t\t\t{{/each}}\n    \t\t},\n    \t\tprops.className,\n    \t);\n        \n    \treturn React.createElement(tag, { ...props, className });\n    };\n';
exports.generate = function (meta) {
	var gener = Handlebars.compile(t);
	var content = gener(meta);
	var componentName = meta.name;
	fs.writeFile("./output/" + componentName + ".tsx", content, function (err) {
		if (err) return console.log(err);
		console.info("Component '" + componentName + "' successfully created");
	});
	return content;
};
exports.generate(json);
