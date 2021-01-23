import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Notification, Delete } from "../../src/index";

import type { NotificationProps } from "../../src/elements/notification";

export default {
	title: "Example/Elements/Notification",
	component: Notification,
} as Meta;

const Template: Story<NotificationProps<HTMLElement>> = (args: any) => (
	<Notification {...args}>
		<Delete />
		Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor.{" "}
		<strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
		nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
		diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur
		adipiscing elit
	</Notification>
);

export const Default = Template.bind({});
Default.args = {};

export const Success = Template.bind({});
Success.args = {
	isColor: "success",
};

export const Link = Template.bind({});
Link.args = {
	isColor: "link",
};

export const Info = Template.bind({});
Info.args = {
	isColor: "info",
};

export const Primary = Template.bind({});
Primary.args = {
	isColor: "primary",
};

export const Warning = Template.bind({});
Warning.args = {
	isColor: "warning",
};

export const Danger = Template.bind({});
Danger.args = {
	isColor: "danger",
};

/* Light version */

export const SuccessLight = Template.bind({});
SuccessLight.args = {
	isColor: "success",
	isLight: true,
};

export const LinkLight = Template.bind({});
LinkLight.args = {
	isColor: "link",
	isLight: true,
};

export const InfoLight = Template.bind({});
InfoLight.args = {
	isColor: "info",
	isLight: true,
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
	isColor: "primary",
	isLight: true,
};

export const WarningLight = Template.bind({});
WarningLight.args = {
	isColor: "warning",
	isLight: true,
};

export const DangerLight = Template.bind({});
DangerLight.args = {
	isColor: "danger",
	isLight: true,
};
