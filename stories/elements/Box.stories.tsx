import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Box as BoxComponent } from "../../src/index";

import type { Box as BoxProps } from "../../src/elements/box";

export default {
	title: "Example/Elements/Box",
	component: BoxComponent,
} as Meta;

export const Box = (args: any) => (
	<BoxComponent {...args}>
		The box element is simply a container with a shadow, a border, a radius, and
		some padding.
	</BoxComponent>
);
