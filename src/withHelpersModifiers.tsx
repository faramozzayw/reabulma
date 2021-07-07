import React from "react";
import classNames from "classnames";

import { Bulma } from "./bulma";
import {
	getBackgroundColorModifiers,
	getFlexboxModifiers,
	getSpacingModifiers,
	getTextColorModifiers,
	getDisplayModifiers,
	getTypographyModifiers,
} from "./utils";
import { getHideModifiers } from "./visibility";

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
		isDisplay,
		isHidden,

		/* */

		isPulled,
		isClearFix,
		isOverlay,
		isClipped,
		isRadiusless,
		isShadowless,
		isUnselectable,
		isClickable,
		isRelative,
		isInvisible,
		isSrOnly,
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
				"is-invisible": isInvisible,
				"is-sr-only": isSrOnly,
				...getFlexboxModifiers(flexbox),
				...getTypographyModifiers(typography),
				...getDisplayModifiers({ isDisplay }),
				...getHideModifiers({ isHidden }),
				...getSpacingModifiers({ spacing }),
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
