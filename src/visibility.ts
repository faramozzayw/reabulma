import { Bulma } from "./bulma";
import { getModifiersCreator, Modifier, ModifierFunction } from "./utils";

const getStringDisplayModifiers = getModifiersCreator<
	Bulma.Helpers.Show,
	"isDisplay"
>("isDisplay");

const getArrayDisplayModifiers: ModifierFunction = (
	isDisplay: Bulma.Helpers.Displays[],
) => {
	let result = new Map<string, boolean>();

	for (const item of isDisplay) {
		result.set(`is-${item}`, true);
	}

	return Object.fromEntries(result);
};

const getObjectDisplayModifiers: ModifierFunction = (
	isDisplay: Bulma.Helpers.DisplayObject,
) => {
	if (Array.isArray(isDisplay)) {
		return Object.entries(isDisplay).map((display) => {
			return getArrayDisplayModifiers(display);
		});
	}

	return {};
};

export const getDisplayModifiers = ({ isDisplay }: Bulma.Helpers.Show) => {
	if (typeof isDisplay === "string") {
		return getStringDisplayModifiers({ isDisplay });
	}

	if (Array.isArray(isDisplay)) return getArrayDisplayModifiers(isDisplay);

	if (typeof isDisplay === "object")
		return getObjectDisplayModifiers(isDisplay);

	return {};
};
