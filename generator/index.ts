import * as Handlebars from "handlebars";
import * as fs from "fs";

// import * as template from "./component.hbs";
import { Component } from "./types";

import * as json from "./testData.json";

const t = `
    {{#unless react17}}
    import React from "react";
    {{/unless}}
    import classnames from "classnames";
    
    import { Bulma } from "bulmaTypes";
    import {
    {{#each modifiers}}
    	{{#if this.hasFn}}
        	get{{this.name}}Modifiers,
    	{{/if}}
    {{/each}}
    } from "utils";
    
    export interface {{name}}Props<T> 
    	extends Bulma.Tag, 
        {{#each modifiers}}
    		Bulma.{{this.name}},
    	{{/each}}
        React.HTMLProps<T> {}
    
    export const {{name}}: React.FC<{{name}}Props<{{type}}>> = ({
    	tag = "{{defaultTag}}",
    	{{#each modifiers}}
    		is{{this.name}},
    	{{/each}}
    	...props
    }) => {
    	const className = classnames(
    		"{{componentClassName}}",
    		{
                {{#each modifiers}}
        			{{#if this.hasFn}}
                    	...get{{this.name}}Modifiers({ is{{this.name}} }),
                    {{else}}
                     	"{{this.className}}": is{{this.name}},
                    {{/if}}
      			{{/each}}
    		},
    		props.className,
    	);
        
    	return React.createElement(tag, { ...props, className });
    };
`;

export const generate = (meta: Object) => {
	const gener = Handlebars.compile(t);
	const content = gener(meta);

	const componentName = (meta as Component).name;

	fs.writeFile(`./output/${componentName}.tsx`, content, (err) => {
		if (err) return console.log(err);

		console.info(`Component '${componentName}' successfully created`);
	});

	return content;
};

generate(json);
