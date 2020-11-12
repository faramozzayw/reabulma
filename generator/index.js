"use strict";
exports.__esModule = true;
exports.generate = void 0;
var fs = require("fs");
var testData_1 = require("./testData");
var Handlebars = require("handlebars");
var template = require("./component.hbs");
var outputDir = "./output/";
var extension = ".tsx";
Handlebars.registerHelper("field", function (options) {
	return Object.values(options)
		.filter(function (v) {
			return v.interface;
		})
		.map(function (v) {
			return Object.entries(v.interface);
		})
		.map(function (v) {
			var _a = v[0],
				key = _a[0],
				field = _a[1];
			return { key: key, field: field };
		})
		.reduce(function (acc, current) {
			var _a;
			return acc.concat(
				"" +
					current.key +
					((
						(_a = current.field) === null || _a === void 0
							? void 0
							: _a.optional
					)
						? "?"
						: "") +
					": " +
					current.field.type +
					";",
			);
		}, [])
		.join("\n");
});
Handlebars.registerHelper("utils", function (options) {
	var interfaces = Object.values(options)
		.filter(function (v) {
			return v.hasFn;
		})
		.map(function (v) {
			return "get" + v.name + "Modifiers";
		})
		.join(", ");
	if (interfaces.length) {
		return "import { " + interfaces + ' } from "utils";';
	}
	return null;
});
exports.generate = function (meta) {
	var content = template(meta);
	var componentName = meta.name;
	var componentDir = outputDir + meta.to;
	try {
		fs.accessSync(componentDir, fs.constants.F_OK);
	} catch (err) {
		fs.mkdirSync(componentDir);
	}
	fs.writeFile(componentDir + componentName + extension, content, function (
		err,
	) {
		if (err) return console.log(err);
		console.info("Component '" + componentName + "' successfully created");
	});
	return content;
};
for (var _i = 0, json_1 = testData_1["default"]; _i < json_1.length; _i++) {
	var component = json_1[_i];
	exports.generate(component);
}
