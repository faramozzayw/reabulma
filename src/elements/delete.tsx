import React from "react";
import classnames from "classnames";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";

export interface DeleteProps<T>
	extends Bulma.Tag,
		Bulma.Size,
		React.HTMLProps<T> {}

export const Delete: React.FC<DeleteProps<
	HTMLButtonElement | HTMLAnchorElement
>> = ({ tag = "a", href, isSize, ...props }) => {
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
				href={href}
				role="button"
				className={className}
				{...(props as React.HTMLProps<HTMLAnchorElement>)}
			/>
		);
	}

	const type = (props.type ?? "button") as Pick<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		"type"
	>;

	return (
		<button
			type={type as any}
			className={className}
			{...(props as React.HTMLProps<HTMLButtonElement>)}
		/>
	);
};
