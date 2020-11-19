import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Icon } from "./../../src/index";
import { IconProps } from "../../src/elements/icon";

export default {
	title: "Example/Elements/Icon",
	component: Icon,
} as Meta;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />;

export const Example: Story<IconProps> = Template.bind({});
Example.args = {
	isSize: "medium",
	icon: "fab fa-discord fa-3x",
};
