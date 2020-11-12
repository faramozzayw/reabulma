import * as fs from "fs";
import { Generator } from "./hbs";
import json from "./testData";

const Handlebars = require("handlebars");
const template = require("./component.hbs");

const outputDir = "./output/";
const extension = ".tsx";

Handlebars.registerHelper("field", (options: Generator.ModifierOptions) => {
	return Object.values(options)
		.filter((v) => v.interface)
		.map((v) => Object.entries(v.interface))
		.map((v) => {
			const [key, field] = v[0];
			return { key, field };
		})
		.reduce(
			(acc, current) =>
				acc.concat(
					`${current.key}${current.field?.optional ? "?" : ""}: ${
						current.field.type
					};`,
				),
			[],
		)
		.join("\n");
});

Handlebars.registerHelper("utils", (options: Generator.ModifierOptions) => {
	const interfaces = Object.values(options)
		.filter((v) => v.hasFn)
		.map((v) => `get${v.name}Modifiers`)
		.join(", ");

	if (interfaces.length) {
		return `import { ${interfaces} } from "utils";`;
	}

	return null;
});

export const generate = (meta: Generator.Component) => {
	const content = template(meta);

	const componentName = meta.name;
	const componentDir = outputDir + meta.to;

	try {
		fs.accessSync(componentDir, fs.constants.F_OK);
	} catch (err) {
		fs.mkdirSync(componentDir);
	}

	fs.writeFile(componentDir + componentName + extension, content, (err) => {
		if (err) return console.log(err);

		console.info(`Component '${componentName}' successfully created`);
	});

	return content;
};

for (const component of json) {
	generate(component);
}
