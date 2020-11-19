import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";

export interface IconProps extends Bulma.Size, React.HTMLProps<HTMLElement> {
	icon?: string | JSX.Element;
}

export const Icon: React.FC<IconProps> = ({ isSize, icon, ...props }) => {
	const className = classnames(
		"icon",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	if (typeof icon === "string") {
		const imgClassname = classnames(icon, {});
		return (
			<span className={className} {...props}>
				<i className={imgClassname} aria-hidden="true"></i>
			</span>
		);
	}

	return (
		<span className={className} {...props}>
			{icon}
		</span>
	);
};
