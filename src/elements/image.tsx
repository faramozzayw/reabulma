import classnames from "classnames";

import { Bulma } from "../bulma";
import {
	getRoundedModifiers,
	getImageRatioModifiers,
	getImageSizeModifiers,
} from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface ImageProps
	extends Bulma.Rounded,
		Bulma.ImageSize,
		Bulma.ImageRatio,
		React.HTMLProps<HTMLImageElement> {}

const __Image: React.FC<ImageProps> = ({
	src,
	isRounded,
	isSize,
	isRatio,
	...props
}) => {
	const className = classnames(
		"image",
		{
			...getImageRatioModifiers({ isRatio }),
			...getImageSizeModifiers({ isSize }),
		},
		props.className,
	);

	const imgClassname = classnames({
		...getRoundedModifiers({ isRounded }),
	});

	return (
		<figure {...props} className={className}>
			<img src={src} className={imgClassname} />
		</figure>
	);
};

export const Image = withHelpersModifiers(__Image);
