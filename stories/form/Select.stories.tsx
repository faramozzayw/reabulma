import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field, Select, Label, Title } from "../../src/index";

import type { SelectProps } from "../../src/form/select";

export default {
	title: "Example/Form/Select",
	component: Select,
} as Meta;

const Template: Story<SelectProps> = (args: SelectProps) => (
	<Field>
		<Control>
			<Select {...(args as typeof Select)}>
				<option>Select dropdown</option>
				<option>With options</option>
			</Select>
		</Control>
	</Field>
);

export const Default: Story<SelectProps> = Template.bind({});

export const MultipleSelect: Story<SelectProps> = (args: SelectProps) => (
	<Field>
		<Control>
			<Title isSize="6" isSpaced isSubtitle>
				You can style a <b>multiple select</b> dropdown, by using the{" "}
				<i>multiple</i> HTML attribute.
			</Title>
			<Select {...(args as typeof Select)}>
				<option value="Argentina">Argentina</option>
				<option value="Bolivia">Bolivia</option>
				<option value="Brazil">Brazil</option>
				<option value="Chile">Chile</option>
				<option value="Colombia">Colombia</option>
				<option value="Ecuador">Ecuador</option>
				<option value="Guyana">Guyana</option>
				<option value="Paraguay">Paraguay</option>
				<option value="Peru">Peru</option>
				<option value="Suriname">Suriname</option>
				<option value="Uruguay">Uruguay</option>
				<option value="Venezuela">Venezuela</option>
			</Select>
		</Control>
	</Field>
);
MultipleSelect.args = {
	multiple: true,
	size: 8,
};

export const Rounded: Story<SelectProps> = Template.bind({});
Rounded.args = {
	isRounded: true,
};
