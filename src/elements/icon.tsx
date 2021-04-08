import classnames from "classnames";
import { FC, HTMLProps } from "react";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface IconProps extends Bulma.Size, HTMLProps<HTMLElement> {
	icon?: string | JSX.Element;
}

const __Icon: FC<IconProps> = ({ isSize, icon, ...props }) => {
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
			<span {...props} className={className}>
				<i className={imgClassname} aria-hidden="true"></i>
			</span>
		);
	}

	return (
		<span {...props} className={className}>
			{icon}
		</span>
	);
};

export const Icon = withHelpersModifiers(__Icon);
