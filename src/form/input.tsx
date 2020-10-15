import React, { forwardRef } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getLoadingModifiers,
	getRoundedModifiers,
	getStateModifiers,
} from "../utils";

export interface InputProps<T = HTMLInputElement>
	extends Bulma.Color,
		Bulma.Size,
		Bulma.State,
		Bulma.Rounded,
		Bulma.Static,
		React.HTMLProps<T> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{ isSize, isColor, isStatic, isRounded, isState, children, ...props },
		ref,
	) => {
		const className = classnames(
			"input",
			{
				"is-disabled": props.disabled,
				"is-multiple": props.multiple,
				"is-static": isStatic,
				...getRoundedModifiers({ isRounded }),
				...getStateModifiers({ isState }),
				...getColorModifiers({ isColor }),
				...getSizeModifiers({ isSize }),
			},
			props.className,
		);

		return (
			<input
				{...props}
				className={className}
				type={props.type ?? "text"}
				ref={ref}
			/>
		);
	},
);
