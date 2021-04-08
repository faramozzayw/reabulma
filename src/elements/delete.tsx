import classnames from "classnames";
import { FC, HTMLProps, ButtonHTMLAttributes } from "react";

import { Bulma } from "../bulma";
import { getSizeModifiers } from "../utils";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface DeleteProps<T> extends Bulma.Tag, Bulma.Size, HTMLProps<T> {}

const __Delete: FC<DeleteProps<HTMLButtonElement | HTMLAnchorElement>> = ({
	tag = "a",
	href,
	isSize,
	...props
}) => {
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
				{...(props as HTMLProps<HTMLAnchorElement>)}
				href={href}
				role="button"
				className={className}
			/>
		);
	}

	const type = (props.type ?? "button") as Pick<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"type"
	>;

	return (
		<button
			{...(props as HTMLProps<HTMLButtonElement>)}
			type={type as any}
			className={className}
		/>
	);
};

export const Delete = withHelpersModifiers(__Delete);
