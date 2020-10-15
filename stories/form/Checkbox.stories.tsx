import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field, Checkbox } from "../../src/index";

import type { CheckboxProps } from "../../src/form/checkbox";

export default {
	title: "Example/Form/Checkbox",
	component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: CheckboxProps) => (
	<Field>
		<Control>
			<Checkbox {...(args as any)}> Remember me</Checkbox>
		</Control>
	</Field>
);

export const Default: Story<CheckboxProps> = Template.bind({});
Default.args = {
	disabled: false,
};
