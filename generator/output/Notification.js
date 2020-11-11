"use strict";
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s)
						if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
var __rest =
	(this && this.__rest) ||
	function (s, e) {
		var t = {};
		for (var p in s)
			if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
				t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === "function")
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
				if (
					e.indexOf(p[i]) < 0 &&
					Object.prototype.propertyIsEnumerable.call(s, p[i])
				)
					t[p[i]] = s[p[i]];
			}
		return t;
	};
exports.__esModule = true;
exports.Notification = void 0;
var react_1 = require("react");
var classnames_1 = require("classnames");
var utils_1 = require("utils");
exports.Notification = function (_a) {
	var _b = _a.tag,
		tag = _b === void 0 ? "div" : _b,
		isColor = _a.isColor,
		isRounded = _a.isRounded,
		isLight = _a.isLight,
		props = __rest(_a, ["tag", "isColor", "isRounded", "isLight"]);
	var className = classnames_1["default"](
		"notification",
		__assign(
			__assign(
				__assign({}, utils_1.getColorModifiers({ isColor: isColor })),
				utils_1.getRoundedModifiers({ isRounded: isRounded }),
			),
			{ "is-light": isLight },
		),
		props.className,
	);
	return react_1["default"].createElement(
		tag,
		__assign(__assign({}, props), { className: className }),
	);
};
