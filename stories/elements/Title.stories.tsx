import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Title } from "../../src/index";

import type { Title as TitleProps } from "../../src/elements/title";

export default {
	title: "Example/Elements/Title",
	component: Title,
} as Meta;

const Template: Story<TitleProps<HTMLElement>> = (args: any) => (
	<nav>
		<Title {...args}>Sad</Title>
	</nav>
);

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {};

export const DefaultSubtitle = Template.bind({});
DefaultSubtitle.args = {
	isSubtitle: true,
};

export const SpacedTitle = (args: any) => (
	<>
		<Title isSize="1" {...args}>
			Title 1
		</Title>
		<Title isSubtitle isSize="3">
			Subtitle 3
		</Title>
	</>
);

SpacedTitle.args = {
	isSpaced: true,
};
