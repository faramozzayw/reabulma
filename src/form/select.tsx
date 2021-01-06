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
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface SelectProps<T = HTMLSelectElement>
	extends Bulma.Color,
		Bulma.Size,
		Bulma.Loading,
		Bulma.State,
		Bulma.Rounded,
		React.HTMLProps<T> {}

const __Select = forwardRef<HTMLSelectElement, SelectProps>(
	(
		{ isSize, isColor, isLoading, isRounded, isState, children, ...props },
		ref,
	) => {
		const wrapperClassname = classnames(
			"select",
			{
				"is-disabled": props.disabled,
				"is-multiple": props.multiple,
				...getStateModifiers({ isState }),
				...getRoundedModifiers({ isRounded }),
				...getColorModifiers({ isColor }),
				...getSizeModifiers({ isSize }),
				...getLoadingModifiers({ isLoading }),
			},
			props.className,
		);

		return (
			<div className={wrapperClassname}>
				<select {...(props as React.HTMLProps<HTMLSelectElement>)} ref={ref}>
					{children}
				</select>
			</div>
		);
	},
);

export const Select = withHelpersModifiers(__Select);
