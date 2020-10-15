import React, { forwardRef } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getStateModifiers,
} from "../utils";

export interface TextAreaProps<T>
	extends Bulma.Color,
		Bulma.Size,
		Bulma.State,
		React.HTMLProps<T> {
	hasFixedSize?: boolean;
}

export const TextArea = forwardRef<
	HTMLTextAreaElement,
	TextAreaProps<HTMLTextAreaElement>
>(({ isSize, isState, isColor, hasFixedSize, ...props }, ref) => {
	const className = classnames(
		"textarea",
		{
			"has-fixed-size": hasFixedSize,
			...getColorModifiers({ isColor }),
			...getSizeModifiers({ isSize }),
			...getStateModifiers({ isState }),
		},
		props.className,
	);

	return (
		<textarea
			ref={ref}
			{...(props as React.HTMLProps<HTMLTextAreaElement>)}
			className={className}
		/>
	);
});
