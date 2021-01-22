import React from "react";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface PanelIconProps<T> extends React.HTMLProps<T> {
	icon: string;
}

const __PanelIcon: React.FC<PanelIconProps<HTMLElement>> = ({
	children,
	icon,
	...props
}) => (
	<span {...props} className="panel-icon">
		<i className={`${icon}`} aria-hidden="true"></i>
	</span>
);

export const PanelIcon = withHelpersModifiers(__PanelIcon);
