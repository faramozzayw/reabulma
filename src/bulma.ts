import { fractions, width } from "./columns/utils";

export declare namespace Bulma {
	type Theme = "light" | "dark";

	export type Colors =
		| "white"
		| "light"
		| "dark"
		| "black"
		| "primary"
		| "info"
		| "success"
		| "warning"
		| "danger"
		| "text";

	export type GrayColors =
		| "black-bis"
		| "black-ter"
		| "grey-darker"
		| "grey-dark"
		| "grey"
		| "grey-light"
		| "grey-lighter"
		| "white-ter"
		| "white-bis";

	export interface Color {
		isColor?: Colors;
	}

	export type Sizes = "small" | "normal" | "medium" | "large";
	export interface Size {
		isSize?: Sizes;
	}

	export interface Tag {
		tag?: keyof React.ReactHTML;
	}

	export interface Loading {
		isLoading?: boolean;
	}

	export interface Light {
		isLight?: boolean;
	}

	export interface Rounded {
		isRounded?: boolean;
	}

	export interface Static {
		isStatic?: boolean;
	}

	export interface Link {
		isLink?: boolean;
	}

	export type Align = "left" | "centered" | "right";

	export interface Alignment {
		isAlign?: Align;
	}

	export interface Active {
		isActive?: boolean;
	}

	export type ImageRatioList =
		| "square"
		| "1by1"
		| "5by4"
		| "4by3"
		| "3by2"
		| "5by3"
		| "16by9"
		| "2by1"
		| "3by1"
		| "4by5"
		| "3by4"
		| "2by3"
		| "3by5"
		| "9by16"
		| "1by2"
		| "1by3";

	export interface ImageRatio {
		isRatio?: ImageRatioList;
	}

	export type ImageSizeList =
		| "128x128"
		| "16x16"
		| "24x24"
		| "32x32"
		| "48x48"
		| "64x64"
		| "96x96";

	export interface ImageSize {
		isSize?: ImageSizeList;
	}

	export type HeadingSizes =
		| 1
		| "1"
		| 2
		| "2"
		| 3
		| "3"
		| 4
		| "4"
		| 5
		| "5"
		| 6
		| "6";

	export interface Heading {
		isSize?: HeadingSizes;
		isSpaced?: boolean;
	}

	export type States = "hovered" | "focused" | "active";
	export interface State {
		isState?: States;
	}

	export interface FullWidth {
		isFullWidth?: boolean;
	}

	export namespace Columns {
		export type RegularSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
		export type StringSizes =
			| "1"
			| "2"
			| "3"
			| "4"
			| "5"
			| "6"
			| "7"
			| "8"
			| "9"
			| "10"
			| "11"
			| "12";

		export type Fractions = keyof typeof fractions;
		export type Width = keyof typeof width;

		type AllSizes = RegularSizes | StringSizes | Fractions | Width;

		export interface SizeObject {
			mobile?: AllSizes;
			tablet?: AllSizes;
			desktop?: AllSizes;
			widescreen?: AllSizes;
			default?: AllSizes;
		}

		export type Platforms = keyof SizeObject;

		export interface AbstructSize {}

		export interface Size extends AbstructSize {
			isSize?: AllSizes | SizeObject;
		}

		export interface Offset extends AbstructSize {
			isOffset?: RegularSizes | StringSizes | Fractions | SizeObject;
		}
	}

	export namespace Helpers {
		export interface AllHelpers
			extends TextColor,
				BackgroundColor,
				FullWidth,
				Alignment {
			flexbox?: Flexbox;
			/** Moves an element `left` or `right` */
			isPulled?: "left" | "right";
			/** Fixes an element's floating children */
			isClearFix?: boolean;
			/** Completely **covers** the first positioned parent */
			isOverlay?: boolean;
			/** Adds overflow **hidden** */
			isClipped?: boolean;
			/** Removes any **radius** */
			isRadiusless?: boolean;
			/** Removes any **shadow** */
			isShadowless?: boolean;
			/** Prevents the text from being **selectable** */
			isUnselectable?: boolean;
			/** Applies `cursor: pointer !important` to the element. */
			isClickable?: boolean;
			/** Applies `position: relative` to the element. */
			isRelative?: boolean;
		}

		export type JustifyContent =
			| "flex-start"
			| "flex-end"
			| "center"
			| "space-between"
			| "space-around"
			| "space-evenly"
			| "start"
			| "end"
			| "left"
			| "right";

		export type AlignContent =
			| "flex-start"
			| "flex-end"
			| "center"
			| "space-between"
			| "space-around"
			| "space-evenly"
			| "start"
			| "end"
			| "stretch"
			| "baseline";

		export type AlignItems =
			| "stretch"
			| "flex-start"
			| "flex-end"
			| "center"
			| "baseline"
			| "start"
			| "end"
			| "self-start"
			| "self-end";

		export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
		export type FlexDirection =
			| "row"
			| "row-reverse"
			| "column"
			| "column-reverse";

		export interface Flexbox {
			alignContent?: AlignContent;
			alignItems?: AlignItems;
			justifyContent?: JustifyContent;
			grow?: 1 | 2 | 3 | 4 | 5 | 6;
			shrink?: 1 | 2 | 3 | 4 | 5 | 6;
			wrap?: FlexWrap;
			direction?: FlexDirection;
		}

		export type Family =
			| "sans-serif"
			| "monospace"
			| "primary"
			| "secondary"
			| "code";

		export type TextWeight =
			| "light"
			| "normal"
			| "medium"
			| "semibold"
			| "bold";

		export type TextTransformation =
			| "capitalized"
			| "lowercase"
			| "uppercase"
			| "italic";

		export type AllColors =
			| GrayColors
			| Exclude<Colors, "text">
			| `${Exclude<Colors, "text">}-${Theme}`;

		export interface TextColor {
			hasTextColor?: AllColors;
		}

		export type BackgroundColors =
			| GrayColors
			| Exclude<Colors, "text">
			| `${Exclude<Colors, "text">}-${Theme}`;

		export interface BackgroundColor {
			hasBackgroundColor?: BackgroundColors;
		}

		export type SpacingType = "m" | "p";
		export type SpacingDirection = "t" | "b" | "r" | "l" | "x" | "y" | "";
		export type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6;
		export type Spacing = `${SpacingType}${SpacingDirection}-${SpacingSize}`;
	}
}
