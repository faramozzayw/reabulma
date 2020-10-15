import React, { forwardRef } from "react";
import classnames from "classnames";

import { Bulma } from "./../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getLoadingModifiers,
	getRoundedModifiers,
} from "../utils";

export interface SelectProps<T = HTMLSelectElement>
	extends Bulma.Color,
		Bulma.Size,
		Bulma.Loading,
		Bulma.Rounded,
		React.HTMLProps<T> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	({ isSize, isColor, isLoading, isRounded, children, ...props }, ref) => {
		const wrapperClassname = classnames(
			"select",
			{
				"is-disabled": props.disabled,
				"is-multiple": props.multiple,
				...getRoundedModifiers({ isRounded }),
				...getColorModifiers({ isColor }),
				...getSizeModifiers({ isSize }),
				...getLoadingModifiers({ isLoading }),
			},
			props.className,
		);

		return (
			<div className={wrapperClassname}>
				<select ref={ref} {...(props as React.Props<HTMLSelectElement>)}>
					{children}
				</select>
			</div>
		);
	},
);
