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

export const getTypographyModifiers = (
	typography: Bulma.Helpers.Typography,
) => ({
	...getSizeModifiers(typography?.size),
	...getTransformationModifiers({ transformation: typography?.transformation }),
	...getWeightModifiers({ weight: typography?.weight }),
	...getFamilyModifiers({ family: typography?.family }),
});
