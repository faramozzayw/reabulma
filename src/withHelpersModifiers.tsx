import React from "react";
import classNames from "classnames";

import { Bulma } from "./bulma";
import { getFlexboxModifiers } from "./utils";

/*
export interface HelpersComponent<T>
	extends React.FC<
		T & React.HTMLProps<HTMLElement> & Bulma.Helpers.AllHelpers
	> {}
*/

export type HelpersComponent<T> = React.FC<
	T & Bulma.Helpers.AllHelpers & React.HTMLProps<HTMLElement>
>;
export type Component<T> = T extends React.FC ? T : never;

export function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
	return WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";
}

export function withHelpersModifiers<T>(Component: React.ComponentType<T>) {
	const Wrapped: HelpersComponent<T> = ({ ...props }) => {
		const className = classNames({}, props.className);

		return <Component {...props} className={className} />;
	};

	Wrapped.displayName = `WithHelpers(${getDisplayName(Component)})`;

	return Wrapped;
}

/*
export function withHelpersModifiers<T>(Component: JSX.Element) {
	const Wrapped = ({ flexbox, ...props }) => {
		const className = classNames(
			{
				...getFlexboxModifiers(flexbox),
			},
			props.className,
		);

		return <Component {...props} className={className} />;
	};

	Wrapped.displayName = `WithHelpers(${getDisplayName(Component)})`;

	return Component;
}
*/
