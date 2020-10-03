import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Tabs, Tab } from "../../src/index";

export default {
	title: "Example/Compoment/Tabs",
	component: Tabs,
} as Meta;

export const Default = (args: any) => (
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

export const Alignment = (args: any) => (
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
Alignment.args = {
	isAlign: "centered",
};

export const Sizes = (args: any) => (
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
Sizes.args = {
	isSize: "small",
};

export const Borders = (args: any) => (
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
Borders.args = {
	isBoxed: true,
};

export const Toggle = (args: any) => (
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
Toggle.args = {
	isToggle: true,
};

export const ToggleRounded = (args: any) => (
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
