import { HTMLProps, forwardRef } from "react";
import classnames from "classnames";
import { withHelpersModifiers } from "../withHelpersModifiers";

export interface CheckboxProps<T = HTMLInputElement> extends HTMLProps<T> {}

const __Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ children, ...props }, ref) => {
		const wrapperClassNames = classnames("checkbox", props.className);

		return (
			<label
				className={wrapperClassNames}
				// @ts-ignore
				disabled={props.disabled}
			>
				<input type="checkbox" {...props} ref={ref} />
				{children}
			</label>
		);
	},
);

export const Checkbox = withHelpersModifiers(__Checkbox);
