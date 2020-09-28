import { Bulma } from "./bulma";

type Modifier = { [k: string]: boolean };
type Props<K> = { [key: string]: K };

/**
 * The function returns a function for the modifier.
 *
 * @param {T} T - the type parameter that is used for the field type
 * @param {string} key - field name
 *
 * # Example
 * ```ts
 * type Align = "left" | "centered" | "right";
 * const getAlignmentModifiers = getModifiersCreator<Bulma.Align>("isAlign");
 *
 * // after creating a function it can be used like this
 * const isAlign = getAlignFromSpace();
 * getAlignmentModifiers({ isAlign });
 * ```
 *
 */
export function getModifiersCreator<T>(key: string) {
	return (props: Props<Partial<T>>): Modifier => {
		const modifier = props[key];
		const hasModifier = Boolean(modifier);

		return { [`is-${modifier}`]: hasModifier };
	};
}
11;

export const getColorModifiers = getModifiersCreator<Bulma.Colors>("isColor");
export const getAlignmentModifiers = getModifiersCreator<Bulma.Align>(
	"isAlign",
);
export const getSizeModifiers = getModifiersCreator<Bulma.Sizes>("isSize");
export const getStateModifiers = getModifiersCreator<Bulma.States>("isState");

export const getLightModifiers = ({ isLight }: Bulma.Light) => {
	return { [`is-light`]: isLight };
};

export const getRoundedModifiers = ({ isRounded }: Bulma.Rounded) => {
	return { [`is-rounded`]: isRounded };
};

export const getActiveModifiers = ({ isActive }: Bulma.Active) => {
	return { [`is-active`]: isActive };
};

export const getLoadingModifiers = ({ isLoading }: Bulma.Loading) => {
	return { [`is-loading`]: isLoading };
};

export const getLinkModifiers = ({ isLink }: Bulma.Link) => {
	return { [`is-link`]: isLink };
};

export const getHeadingModifiers = ({
	isSize: size,
	isSpaced,
}: Bulma.Heading) => {
	const isSize = { [`is-${size}`]: true };

	return {
		...isSize,
		"is-spaced": isSpaced,
	};
};
