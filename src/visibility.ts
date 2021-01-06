import { Bulma } from "./bulma";
import { getModifiersCreator, Modifier, ModifierFunction } from "./utils";

const getStringDisplayModifiers = getModifiersCreator<
	Bulma.Helpers.Show,
	"isDisplay"
>("isDisplay");

const getArrayDisplayModifiers = (
	isDisplay: Bulma.Helpers.Displays[],
	type?: Bulma.Helpers.DisplayType,
) => {
	const typePart = Boolean(type) ? `-${type}` : "";
	let result = new Map<string, boolean>();

	for (const item of isDisplay) {
		result.set(`is${typePart}-${item}`, true);
	}

	return Object.fromEntries(result);
};

const getObjectDisplayModifiers: ModifierFunction = (
	isDisplay: Bulma.Helpers.DisplayObject,
) => {
	const display = Object.entries(isDisplay)
		.map(([type, platfrom]) => {
			if (Array.isArray(platfrom))
				return getArrayDisplayModifiers(
					platfrom as any,
					type as Bulma.Helpers.DisplayType,
				);

			return { [`is-${type}-${platfrom}`]: true };
		})
		.reduce((acc, item) => ({ ...acc, ...item }));

	return display;
};

export const getDisplayModifiers: ModifierFunction = ({
	isDisplay,
}: Bulma.Helpers.Show) => {
	if (typeof isDisplay === "string") {
		return getStringDisplayModifiers({ isDisplay });
	}

	if (Array.isArray(isDisplay)) return getArrayDisplayModifiers(isDisplay);

	if (typeof isDisplay === "object")
		return getObjectDisplayModifiers(isDisplay);

	return {};
};

const getStringHideModifiers = getModifiersCreator<
	Bulma.Helpers.Hide,
	"isHidden"
>("isHidden", {
	prefix: "is-hidden",
});

export const getHideModifiers: ModifierFunction = ({
	isHidden,
}: Bulma.Helpers.Hide) => {
	if (typeof isHidden === "boolean") {
		return { [`is-hidden`]: isHidden };
	}

	if (typeof isHidden === "string") {
		return getStringHideModifiers({ isHidden });
	}

	if (Array.isArray(isHidden)) {
		return isHidden
			.map((item) => getStringHideModifiers({ isHidden: item }))
			.reduce((acc, item) => ({ ...acc, ...item }));
	}

	return {};
};
