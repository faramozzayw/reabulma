import React from "react";
import classNames from "classnames";

import { Bulma } from "./bulma";
import {
	getBackgroundColorModifiers,
	getFlexboxModifiers,
	getSpacingModifiers,
	getTextAlignmentModifiers,
	getTextColorModifiers,
} from "./utils";
import { getTypographyModifiers } from "./typography";

export type HelpersComponent<T> = React.FC<
	T & Bulma.Helpers.AllHelpers & React.HTMLProps<HTMLElement>
>;
export type Component<T> = T extends React.FC ? T : never;

export function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
	return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
}

export function withHelpersModifiers<T>(Component: React.ComponentType<T>) {
	const WrappedComponent: HelpersComponent<T> = ({
		flexbox,
		typography,
		hasTextColor,
		hasBackgroundColor,
		spacing,
		isPulled,
		isClearFix,
		isOverlay,
		isClipped,
		isRadiusless,
		isShadowless,
		isUnselectable,
		isClickable,
		isRelative,
		isAlign,
		...props
	}) => {
		const className = classNames(
			{
				[`is-pulled-${isPulled}`]: Boolean(isPulled),
				"is-clearfix": isClearFix,
				"is-overlay": isOverlay,
				"is-clipped": isClipped,
				"is-radiusless": isRadiusless,
				"is-shadowless": isShadowless,
				"is-unselectable": isUnselectable,
				"is-clickable": isClickable,
				"is-relative": isRelative,
				...getFlexboxModifiers(flexbox),
				...getTypographyModifiers(typography),
				...getSpacingModifiers({ spacing }),
				...getTextAlignmentModifiers({ isAlign }),
				...getTextColorModifiers({ hasTextColor }),
				...getBackgroundColorModifiers({ hasBackgroundColor }),
			},
			props.className,
		);

		return <Component {...(props as T)} className={className} />;
	};

	WrappedComponent.displayName = `WithHelpers(${getDisplayName(Component)})`;

	return WrappedComponent;
}

/*
export function withHelpersModifiers<P extends object>(
	Component: React.ComponentType<P>,
) {
	return class extends React.Component<P & BulmaHelpers & React.HTMLProps<HTMLElement>> {
		static displayName = `WithHelpers(${getDisplayName(Component)})`;

		render() {
			const { flexbox, ...props } = this.props;

			const className = classNames(
				{
					...getFlexboxModifiers(flexbox),
				},
				props.className,
			);

			return <Component {...props as P} className={className} />;
		}
	};
}
*/
