import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import {
	getRoundedModifiers,
	getImageRatioModifiers,
	getImageSizeModifiers,
} from "../utils";

export interface Image
	extends Bulma.Rounded,
		Bulma.ImageSize,
		Bulma.ImageRatio,
		React.HTMLProps<HTMLImageElement> {}

export const Image: React.FC<Image> = ({
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
		<figure className={className} {...props}>
			<img src={src} className={imgClassname} />
		</figure>
	);
};
