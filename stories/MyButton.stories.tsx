import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button } from "../src/index";
import { ButtonType } from "../src/elements/Button/Button";

export default {
	title: "Example/Button",
	component: Button,
} as Meta;

const Template: Story<ButtonType> = (args: any) => <Button {...args}></Button>;

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
	isColor: "success",
	children: "Button text",
};
