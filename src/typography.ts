import { Bulma } from "./bulma";
import { getModifiersCreator, Modifier, ModifierFunction } from "./utils";

export const getTransformationModifiers = getModifiersCreator<
	Bulma.Helpers.Typography,
	"transformation"
>("transformation");

export const getWeightModifiers = getModifiersCreator<
	Bulma.Helpers.Typography,
	"weight"
>("weight", {
	prefix: "has-text-weight",
});

export const getFamilyModifiers = getModifiersCreator<
	Bulma.Helpers.Typography,
	"family"
>("family", {
	prefix: "is-family",
});

export const getResponsiveSizeModifiers = (
	isSize: Bulma.Helpers.ResponsiveSize,
): Modifier => {
	let resultSize = {};

	for (const [platform, size] of Object.entries(isSize)) {
		const platformPart = platform === "default" ? "" : `-${platform}`;

		resultSize = {
			...resultSize,
			[`is-size-${size}${platformPart}`]: true,
		};
	}

	return resultSize;
};

export const getSizeModifiers: ModifierFunction = (
	size: Bulma.Helpers.Typography["size"],
) => {
	if (typeof size === "number") {
		return {
			[`is-size-${size}`]: true,
		};
	}

	if (typeof size === "object") return getResponsiveSizeModifiers(size);

	return {};
};

export const getPlainAlignModifiers = getModifiersCreator<
	Bulma.Helpers.Typography,
	"align"
>("align", {
	prefix: "has-text",
});

export const getResponsiveAlignModifiers = (
	isAlign: Bulma.Helpers.ResponsiveTextAlignment,
): Modifier => {
	let resultSize = {};

	for (const [platform, align] of Object.entries(isAlign)) {
		const isDefault = platform === "default";
		const isTuple = Array.isArray(align);
		const withOnly = isTuple ? Boolean(align[1]) : false;

		const alignPart = isTuple ? align[0] : align;
		const platformPart = isDefault ? "" : `-${platform}`;
		const onlyPart = withOnly ? "-only" : "";

		resultSize = {
			...resultSize,
			[`has-text-${alignPart}${platformPart}${onlyPart}`]: true,
		};
	}

	return resultSize;
};

export const getTextAlignModifiers: ModifierFunction = (
	align: Bulma.Helpers.Typography["align"],
) => {
	if (typeof align === "string") return getPlainAlignModifiers({ align });
	if (typeof align === "object") return getResponsiveAlignModifiers(align);

	return {};
};

export const getTypographyModifiers = (
	typography: Bulma.Helpers.Typography,
) => ({
	...getTextAlignModifiers(typography?.align),
	...getSizeModifiers(typography?.size),
	...getTransformationModifiers({ transformation: typography?.transformation }),
	...getWeightModifiers({ weight: typography?.weight }),
	...getFamilyModifiers({ family: typography?.family }),
});
