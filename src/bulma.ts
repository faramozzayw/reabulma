import { fractions, width } from "./columns/utils";

export declare namespace Bulma {
	type Theme = "light" | "dark";
	type Viewports = "mobile" | "tablet" | "desktop" | "widescreen" | "fullhd";
	type IsOnly = "-only" | "";

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

	export type GrayShades =
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

		export type SizeObject = {
			[key in Viewports | "default"]?: AllSizes;
		};

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
				Spacing,
				Show,
				Hide,
				VisibilityHelpers {
			flexbox?: Flexbox;
			typography?: Typography;
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

		/*
		**************************
			Flexbox
		**************************
		*/
		export interface Flexbox {
			alignContent?: AlignContent;
			alignItems?: AlignItems;
			justifyContent?: JustifyContent;
			grow?: 1 | 2 | 3 | 4 | 5 | 6;
			shrink?: 1 | 2 | 3 | 4 | 5 | 6;
			wrap?: FlexWrap;
			direction?: FlexDirection;
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

		/*
		**************************
			Typography
		**************************
		*/
		export interface Typography {
			/** You can transform the text with the use of one of 4 text transformation helpers */
			transformation?: TextTransformation;
			/** You can transform the text weight with the use of one of 5 text weight helpers */
			weight?: TextWeight;
			/** You can change the font family with the use of one of 5 font family helpers */
			family?: Family;
			size?: Sizes | ResponsiveSize;
			align?: TextAlign | ResponsiveTextAlignment;
		}

		export type Sizes = 1 | 2 | 3 | 4 | 5 | 6 | 7;
		export type ResponsiveSize = {
			[key in Viewports | "touch" | "default"]?: Sizes;
		};

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

		export interface TextAlignment {
			isAlign?: Align | "justified";
		}

		export type TextAlign = Align | "justified";
		// prettier-ignore
		export type ResponsiveTextAlignment = {
			[key in Viewports | "touch" | "default"]?: TextAlign | [TextAlign?, boolean?];
		};

		/*
		**************************
			Colors
		**************************
		*/
		export type AllColors =
			| GrayShades
			| Exclude<Colors, "text">
			| `${Exclude<Colors, "text" | "light" | "dark">}-${Theme}`;

		export interface TextColor {
			hasTextColor?: AllColors;
		}

		export type BackgroundColors =
			| GrayShades
			| Exclude<Colors, "text">
			| `${Exclude<Colors, "text" | "light" | "dark">}-${Theme}`;

		export interface BackgroundColor {
			hasBackgroundColor?: BackgroundColors;
		}

		/*
		**************************
			Spacing
		**************************
		*/
		export type SpacingType = "m" | "p";
		export type SpacingDirection = "t" | "b" | "r" | "l" | "x" | "y" | "";
		export type SpacingSize = 0 | 1 | 2 | 3 | 4 | 5 | 6;
		export type AllSpacing = `${SpacingType}${SpacingDirection}-${SpacingSize}`;

		export interface Spacing {
			/** Bulma provides margin `m*` and padding `p*` helpers in all directions */
			spacing?: AllSpacing[];
		}
		/*
		**************************
			Visibility
		**************************
		*/

		export type DisplayType =
			| "block"
			| "flex"
			| "inline"
			| "inline-block"
			| "inline-flex";

		export type Platforms = `${Viewports | "touch"}${IsOnly}`;
		export type PlatformsWithDefault = Platforms | "default";

		export type DisplayObject = {
			[key in DisplayType]?: PlatformsWithDefault | PlatformsWithDefault[];
		};
		export type Displays = `${DisplayType}-${Platforms}`;
		// export type DisplayObject = {
		// 	[key in DisplayType]?: `${Extract<DisplayType, key>}-${Displays}`;
		// };

		export interface Show {
			isDisplay?: Displays | Displays[] | DisplayObject;
		}

		export interface Hide {
			/** Hides element */
			isHidden?: boolean | Platforms | Platforms[];
		}

		export interface VisibilityHelpers {
			/** Adds visibility **hidden** */
			isInvisible?: boolean;
			/** Hide elements **visually** but keep the element available to be announced by a **screen reader** */
			isSrOnly?: boolean;
		}
	}
}
