export declare namespace Bulma {
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
}
