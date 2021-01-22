import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Tabs, Tab } from "../../src/index";

export default {
	title: "Example/Compoment/Tabs",
	component: Tabs,
} as Meta;

const Template: Story = (args: any) => (
	<Tabs {...args}>
		<ul>
			<Tab isActive>
				<a>Pictures</a>
			</Tab>
			<Tab>
				<a>Music</a>
			</Tab>
			<Tab>
				<a>Videos</a>
			</Tab>
			<Tab>
				<a>Documents</a>
			</Tab>
		</ul>
	</Tabs>
);

export const Default = Template.bind({});

export const Alignment = Template.bind({});
Alignment.args = {
	isAlign: "centered",
};

export const Sizes = Template.bind({});
Sizes.args = {
	isSize: "small",
};

export const Borders = Template.bind({});
Borders.args = {
	isBoxed: true,
};

export const Toggle = Template.bind({});
Toggle.args = {
	isToggle: true,
};

export const ToggleRounded = Template.bind({});
ToggleRounded.args = {
	isToggle: true,
	isToggleRounded: true,
};

export const Fullwidth = (args: any) => (
	<Tabs {...args}>
		<ul>
			<Tab>
				<a>Left</a>
			</Tab>
			<Tab>
				<a>Up</a>
			</Tab>
			<Tab>
				<a>Right</a>
			</Tab>
		</ul>
	</Tabs>
);
Fullwidth.args = {
	isFullWidth: true,
};
