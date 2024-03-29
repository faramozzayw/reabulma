import classnames from "classnames";

import { Bulma } from "./../../bulma";
import {
	getColorModifiers,
	getSizeModifiers,
	getStateModifiers,
	getLoadingModifiers,
} from "./../../utils";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface ButtonProps<T>
	extends Bulma.Color,
		Bulma.Loading,
		Bulma.Size,
		Bulma.Light,
		Bulma.Rounded,
		Bulma.State,
		Bulma.FullWidth,
		React.HTMLProps<T> {
	isLink?: boolean;
	isGhost?: boolean;
	isOutlined?: boolean;
	isInverted?: boolean;
	isStatic?: boolean;
	type?: "button" | "submit" | "reset";
}

export type ButtonType = React.FC<
	ButtonProps<HTMLButtonElement | HTMLAnchorElement>
>;

const __Button: ButtonType = ({
	isLink,
	isOutlined,
	isInverted,
	isStatic,
	isColor,
	isSize,
	isLight,
	isRounded,
	isLoading,
	isState,
	isFullWidth,
	isGhost,
	type,
	...props
}) => {
	const className = classnames(
		"button",
		{
			"is-inverted": isInverted,
			"is-link": isLink,
			"is-outlined": isOutlined,
			"is-static": isStatic,
			"is-light": isLight,
			"is-rounded": isRounded,
			"is-fullwidth": isFullWidth,
			...getColorModifiers({ isColor: isGhost ? "ghost" : isColor }),
			...getSizeModifiers({ isSize }),
			...getStateModifiers({ isState }),
			...getLoadingModifiers({ isLoading }),
		},
		props.className,
	);

	if (props.href) {
		return (
			// eslint-disable-next-line jsx-a11y/anchor-has-content
			<a
				{...(props as React.HTMLProps<HTMLAnchorElement>)}
				role="button"
				className={className}
				href={props.href}
			/>
		);
	}

	return (
		<button
			{...(props as React.HTMLProps<HTMLButtonElement>)}
			type={type ?? "button"}
			className={className}
		/>
	);
};

export const Button = withHelpersModifiers(__Button);
