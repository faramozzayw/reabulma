import React, { forwardRef } from "react";
import classnames from "classnames";

export interface CheckboxProps<T = HTMLInputElement>
	extends React.HTMLProps<T> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ children, ...props }) => {
		const wrapperClassNames = classnames("checkbox", props.className);

		return (
			<label
				className={wrapperClassNames}
				// @ts-ignore
				disabled={props.disabled}
			>
				<input type="checkbox" {...props} />
				{children}
			</label>
		);
	},
);
