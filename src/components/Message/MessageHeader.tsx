import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MessageHeaderProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __MessageHeader: React.FC<MessageHeaderProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("message-header", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const MessageHeader = withHelpersModifiers(__MessageHeader);
