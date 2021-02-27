import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface DeleteProps<T>
	extends Bulma.Tag,
		Bulma.Size,
		React.HTMLProps<T> {}

const __Delete: React.FC<
	DeleteProps<HTMLButtonElement | HTMLAnchorElement>
> = ({ tag = "a", href, isSize, ...props }) => {
	const className = classnames(
		"delete",
		{
			...getSizeModifiers({ isSize }),
		},
		props.className,
	);

	if (href) {
		return (
			<a
				{...(props as React.HTMLProps<HTMLAnchorElement>)}
				href={href}
				role="button"
				className={className}
			/>
		);
	}

	const type = (props.type ?? "button") as Pick<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"type"
	>;

	return (
		<button
			{...(props as React.HTMLProps<HTMLButtonElement>)}
			type={type as any}
			className={className}
		/>
	);
};

export const Delete = withHelpersModifiers(__Delete);
