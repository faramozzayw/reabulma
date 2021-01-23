import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TextArea, Field, Control } from "../../src/index";

export default {
	title: "Example/Form/TextArea",
	component: TextArea,
} as Meta;

const Template: Story = (args: any) => (
	<Field>
		<Control>
			<TextArea {...args} />
		</Control>
	</Field>
);

export const Loading = (args: any) => (
	<Field>
		<Control isLoading>
			<TextArea {...args} />
		</Control>
	</Field>
);
Loading.args = {
	placeholder: "placeholder",
};

export const Default = Template.bind({});
Default.args = {
	placeholder: "10 lines of textarea",
	rows: "10",
};

export const Disable = Template.bind({});
Disable.args = {
	placeholder: "placeholder",
	disabled: true,
};

export const Readonly = Template.bind({});
Readonly.args = {
	placeholder: "placeholder",
	readOnly: true,
};

export const FixedSize = Template.bind({});
FixedSize.args = {
	placeholder: "placeholder",
	hasFixedSize: true,
};
