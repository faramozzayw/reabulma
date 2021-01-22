import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field, Input, Select, Button } from "../../src/index";
import { FieldProps } from "../../src/form/field";

export default {
	title: "Example/Form/Field",
	component: Field,
} as Meta;

export const Default = (args: any) => (
	<Field {...args}>
		<Control>
			<Select
				type="text"
				placeholder="Text input"
				isColor="dark"
				name="country"
			>
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
		<Control>
			<Button isColor="dark">Choose</Button>
		</Control>
	</Field>
);

export const Grouped: Story<FieldProps> = (args: FieldProps) => (
	<Field {...args}>
		<Control isExpanded>
			<Input type="text" placeholder="Find a repository" />
		</Control>
		<Control>
			<Button isColor="success" isLight>
				Search
			</Button>
		</Control>
	</Field>
);
Grouped.args = {
	isGrouped: true,
};

export const MulitlineGrouped: Story<FieldProps> = (args: FieldProps) => (
	<Field {...args} style={{ width: "50%" }}>
		<Control>
			<Button>One</Button>
		</Control>
		<Control>
			<Button>Two</Button>
		</Control>
		<Control>
			<Button>Three</Button>
		</Control>
		<Control>
			<Button>Four</Button>
		</Control>
		<Control>
			<Button>Five</Button>
		</Control>
		<Control>
			<Button>Six</Button>
		</Control>
		<Control>
			<Button>Seven</Button>
		</Control>
		<Control>
			<Button>Eight</Button>
		</Control>
		<Control>
			<Button>Nine</Button>
		</Control>
		<Control>
			<Button>Ten</Button>
		</Control>
		<Control>
			<Button>Eleven</Button>
		</Control>
		<Control>
			<Button>Twelve</Button>
		</Control>
		<Control>
			<Button>Thirteen</Button>
		</Control>
	</Field>
);
MulitlineGrouped.args = {
	isGrouped: true,
	multiline: true,
};
