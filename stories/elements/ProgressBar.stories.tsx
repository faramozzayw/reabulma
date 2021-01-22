import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ProgressBar } from "../../src/index";

import type { ProgressBarProps } from "../../src/elements/ProgressBar";

export default {
	title: "Example/Elements/ProgressBar",
	component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args: any) => (
	<ProgressBar {...args} />
);

export const Success = Template.bind({});
Success.args = {
	isColor: "success",
	value: "15",
	max: "100",
};

export const info = Template.bind({});
info.args = {
	isColor: "info",
	value: "50",
	max: "100",
};

export const primary = Template.bind({});
primary.args = {
	isColor: "primary",
	value: "50",
	max: "100",
};

export const Warning = Template.bind({});
Warning.args = {
	isColor: "warning",
	value: "50",
	max: "100",
};

export const Small = Template.bind({});
Small.args = {
	isSize: "small",
	isColor: "primary",
	value: "50",
	max: "100",
};

export const Large = Template.bind({});
Large.args = {
	isSize: "large",
	isColor: "primary",
	value: "50",
	max: "100",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
	isSize: "large",
	isColor: "primary",
	value: "",
	max: "100",
};
