import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Image } from "./../../src/index";

export default {
	title: "Example/Elements/Image",
	component: Image,
} as Meta;

const Template = (args: any) => <Image {...args} />;

export const Example = Template.bind({});
Example.args = {
	src: "https://bulma.io/images/placeholders/256x256.png",
	isSize: "128x128",
	isRounded: true,
};
