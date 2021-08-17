import { Bulma } from "./bulma";

export * from "./typography";
export * from "./visibility";

export type Modifier = { [k: string]: boolean };
export type ModifierFunction<T = unknown> = (props: T) => Modifier;

export function combineModifiers(
	props: any,
	...args: ModifierFunction[]
): Object {
	return args.length > 0
		? args.reduce((rest, fn) => ({ ...rest, ...fn(props) }), {})
		: {};
}

/**
 * The function returns a function for the modifier.
 *
 * @param T - the type parameter that is used for the field type
 * @param key - field name
 * @param options
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
export function getModifiersCreator<T, K extends keyof T = any>(
	key: string,
	options?: {
		prefix?: string;
	},
): ModifierFunction<Pick<T, K>> {
	return (props) => {
		const modifier = props[key];
		const hasModifier = Boolean(modifier);
		const prefix = options?.prefix ?? "is";

		return { [`${prefix}-${modifier}`]: hasModifier };
	};
}

export const getColorModifiers = getModifiersCreator<Bulma.Colors>("isColor");
export const getAlignmentModifiers = getModifiersCreator<
	Bulma.Alignment,
	"isAlign"
>("isAlign");
export const getSizeModifiers = getModifiersCreator<Bulma.Sizes>("isSize");
export const getStateModifiers = getModifiersCreator<Bulma.States>("isState");

export const getImageSizeModifiers = getModifiersCreator<Bulma.ImageSizeList>(
	"isSize",
);
export const getImageRatioModifiers = getModifiersCreator<Bulma.ImageRatioList>(
	"isRatio",
);

export const getLightModifiers: ModifierFunction = ({
	isLight,
}: Bulma.Light) => {
	return { [`is-light`]: isLight };
};

export const getRoundedModifiers: ModifierFunction = ({
	isRounded,
}: Bulma.Rounded) => {
	return { [`is-rounded`]: isRounded };
};

export const getActiveModifiers: ModifierFunction = ({
	isActive,
}: Bulma.Active) => {
	return { [`is-active`]: isActive };
};

export const getLoadingModifiers: ModifierFunction = ({
	isLoading,
}: Bulma.Loading) => {
	return { [`is-loading`]: isLoading };
};

export const getLinkModifiers: ModifierFunction = ({ isLink }: Bulma.Link) => {
	return { [`is-link`]: isLink };
};

export const getHeadingModifiers: ModifierFunction = ({
	isSize: size,
	isSpaced,
}: Bulma.Heading) => {
	const isSize = { [`is-${size}`]: true };

	return {
		...isSize,
		"is-spaced": isSpaced,
	};
};

/* Helpers modifiers */

export const getSpacingModifiers: ModifierFunction<Bulma.Helpers.Spacing> = ({
	spacing,
}) => {
	if (!spacing) return {};

	return Object.fromEntries(spacing.map((item) => [item, Boolean(item)]));
};

export const getAlignContentModifiers = getModifiersCreator<
	Bulma.Helpers.Flexbox,
	"alignContent"
>("alignContent", {
	prefix: "is-align-content",
});

export const getAlignItemsModifiers = getModifiersCreator<
	Bulma.Helpers.Flexbox,
	"alignItems"
>("alignItems", {
	prefix: "is-align-items",
});

export const getJustifyContentModifiers = getModifiersCreator<
	Bulma.Helpers.Flexbox,
	"justifyContent"
>("justifyContent", {
	prefix: "is-justify-content",
});

export const getFlexDirectionModifiers = getModifiersCreator<
	Bulma.Helpers.Flexbox,
	"direction"
>("direction", {
	prefix: "is-flex-direction",
});

export const getWrapModifiers = getModifiersCreator<
	Bulma.Helpers.Flexbox,
	"wrap"
>("wrap", {
	prefix: "is-flex-wrap",
});

export const getFlexboxModifiers = (flexbox: Bulma.Helpers.Flexbox) => ({
	...getAlignContentModifiers({ alignContent: flexbox?.alignContent }),
	...getAlignItemsModifiers({ alignItems: flexbox?.alignItems }),
	...getJustifyContentModifiers({ justifyContent: flexbox?.justifyContent }),
	...getWrapModifiers({ wrap: flexbox?.wrap }),
	...getFlexDirectionModifiers({ direction: flexbox?.direction }),
});

export const getTextColorModifiers = getModifiersCreator<
	Bulma.Helpers.TextColor,
	"hasTextColor"
>("hasTextColor", {
	prefix: "has-text",
});

export const getBackgroundColorModifiers = getModifiersCreator<
	Bulma.Helpers.BackgroundColor,
	"hasBackgroundColor"
>("hasBackgroundColor", {
	prefix: "has-background",
});
