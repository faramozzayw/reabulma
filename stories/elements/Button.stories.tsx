import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../../src/index";

import type { ButtonType } from "../../src/elements/Button/Button";

export default {
	title: "Example/Elements/Button",
	component: Button,
	argTypes: {
		onClick: { action: "clicked" },
	},
} as Meta;

const Template: Story<ButtonType> = (args: any) => <Button {...args}></Button>;

export const Success = Template.bind({});
Success.args = {
	isColor: "success",
	children: "Button text",
};

export const Loading = Template.bind({});
Loading.args = {
	isColor: "info",
	children: "Button text",
	isLoading: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	isColor: "primary",
	children: "Button text",
	isOutlined: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	isColor: "warning",
	children: "Button text",
	isFullWidth: true,
};

export const Small = Template.bind({});
Small.args = {
	isSize: "small",
	children: "Button text",
	isColor: "primary",
};

export const Large = Template.bind({});
Large.args = {
	isSize: "large",
	children: "Button text",
	isColor: "primary",
};

export const Ghost = Template.bind({});
Ghost.args = {
	isGhost: true,
	children: "Ghost",
};
