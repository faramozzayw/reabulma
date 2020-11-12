"use strict";
exports.__esModule = true;
var data = [
	{
		to: "elements/",
		name: "Notification",
		componentClassName: "notification",
		defaultTag: "div",
		modifiers: [
			{
				hasFn: true,
				name: "Color",
				className: "is-color",
			},
			{
				hasFn: true,
				name: "Rounded",
				className: "is-rounded",
			},
			{ name: "Light", className: "is-light" },
		],
		type: "HTMLElement",
	},
	{
		to: "elements/",
		name: "Content",
		componentClassName: "content",
		defaultTag: "div",
		modifiers: [
			{
				hasFn: true,
				name: "Size",
				className: "is-size",
			},
		],
		type: "HTMLElement",
	},
	{
		to: "form/",
		name: "Field",
		componentClassName: "field",
		defaultTag: "div",
		modifiers: [
			{
				name: "Horizontal",
				className: "is-horizontal",
				interface: {
					isHorizontal: {
						type: "boolean",
						optional: true,
					},
				},
			},
		],
		type: "HTMLElement",
	},
];
exports["default"] = data;
