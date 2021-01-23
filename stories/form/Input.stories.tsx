import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field, Input } from "../../src/index";
import type { InputProps } from "../../src/form/input";

export default {
	title: "Example/Form/Input",
	component: Input,
} as Meta;

const defaultProps = {
	type: "text",
	placeholder: "placeholder",
};

const Template: Story<InputProps> = (args: InputProps) => (
	<Field>
		<Control>
			<Input {...(args as any)} />
		</Control>
	</Field>
);

export const Default: Story<InputProps> = Template.bind({});
Default.args = {
	...defaultProps,
};

export const Sizes: Story<InputProps> = Template.bind({});
Sizes.args = {
	...defaultProps,
	isSize: "large",
};

export const Rounded: Story<InputProps> = Template.bind({});
Rounded.args = {
	...defaultProps,
	isRounded: true,
};

export const Static: Story<InputProps> = Template.bind({});
Static.args = {
	...defaultProps,
	isStatic: true,
};

export const ReadOnly: Story<InputProps> = Template.bind({});
ReadOnly.args = {
	...defaultProps,
	readOnly: true,
};
