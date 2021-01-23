import { Bulma } from "../bulma";
import { Modifier } from "../utils";

export const fractions = {
	"3/4": "three-quarters",
	"2/3": "two-thirds",
	"1/2": "half",
	"1/3": "one-third",
	"1/4": "one-quarter",
	"4/5": "four-fifths",
	"3/5": "three-fifths",
	"2/5": "two-fifths",
	"1/5": "one-fifth",
};

export const width = {
	// prettier-ignore
	"full": "full",
	// prettier-ignore
	"narrow": "narrow",
};

export const sizes = {
	...fractions,
	...width,
};

interface SomeSizeArg<T = unknown> {
	isSize: T;
	isOffset?: boolean;
	platform?: Bulma.Columns.Platforms;
	from?: unknown;
}

export function getSomeSizeModifiers<T>({
	isSize,
	isOffset,
	platform,
	from,
}: SomeSizeArg<T>) {
	const platformPart = platform ? `-${platform}` : "";
	const offsetPart = isOffset ? "offset-" : "";
	const sizePart = from ? from[isSize] : isSize;

	return {
		[`is-${offsetPart}${sizePart}${platformPart}`]: true,
	};
}

export const getGridObjectSizeModifiers = ({
	isSize,
	isOffset,
}: SomeSizeArg<Bulma.Columns.Size>): Modifier => {
	let resultSize = {};

	for (const [platform, size] of Object.entries(isSize)) {
		resultSize = {
			...resultSize,
			...getSizeModifiers({
				isOffset,
				isSize: size,
				platform:
					platform === "default"
						? undefined
						: (platform as Bulma.Columns.Platforms),
			}),
		};
	}

	return resultSize;
};

export const getSizeModifiers = ({
	isSize,
	isOffset,
	platform,
}: SomeSizeArg<Bulma.Columns.AbstructSize>): Modifier => {
	if (!isSize) return {};

	if (typeof isSize === "object")
		return getGridObjectSizeModifiers({ isSize, isOffset });

	if (typeof isSize === "number" || !Number.isNaN(Number(isSize))) {
		return getSomeSizeModifiers<number>({
			platform,
			isOffset,
			isSize: isSize as number,
		});
	}

	return getSomeSizeModifiers<Bulma.Columns.Fractions>({
		platform,
		isOffset,
		isSize: isSize as Bulma.Columns.Fractions,
		from: sizes,
	});
};
