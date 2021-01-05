import React, { forwardRef } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getStateModifiers,
} from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface TextAreaProps<T = HTMLTextAreaElement>
	extends Bulma.Color,
		Bulma.Size,
		Bulma.State,
		React.HTMLProps<T> {
	hasFixedSize?: boolean;
}

const __TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ isSize, isState, isColor, hasFixedSize, ...props }, ref) => {
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
				{...(props as React.HTMLProps<HTMLTextAreaElement>)}
				ref={ref}
				className={className}
			/>
		);
	},
);

export const TextArea = withHelpersModifiers(__TextArea);
