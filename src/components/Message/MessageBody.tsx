import React from "react";
import classnames from "classnames";

import { Bulma } from "./../../bulma";
import { withHelpersModifiers } from "../../withHelpersModifiers";

export interface MessageBodyProps<T = HTMLElement>
	extends Bulma.Tag,
		React.HTMLProps<T> {}

const __MessageBody: React.FC<MessageBodyProps> = ({
	tag = "div",
	...props
}) => {
	const className = classnames("message-body", props.className);

	return React.createElement(tag, {
		...props,
		className,
	});
};

export const MessageBody = withHelpersModifiers(__MessageBody);
