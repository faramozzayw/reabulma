import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tag, Block } from "../../src/index";

export default {
	title: "Example/Elements/Tag",
	component: Tag,
} as Meta;

const Template: Story = (args: any) => <Tag {...args}></Tag>;

export const Success = Template.bind({});
Success.args = {
	isColor: "success",
	children: "Success",
};

export const Colors = () => (
	<>
		<Block>
			<Tag isColor="black">Black</Tag>
		</Block>
		<Block>
			<Tag isColor="dark">Dark</Tag>
		</Block>
		<Block>
			<Tag isColor="light">Light</Tag>
		</Block>
		<Block>
			<Tag isColor="white">White</Tag>
		</Block>
		<Block>
			<Tag isColor="primary">Primary</Tag>
		</Block>
		<Block>
			<Tag isLink>Link</Tag>
		</Block>
		<Block>
			<Tag isColor="info">Info</Tag>
		</Block>
		<Block>
			<Tag isColor="success">Success</Tag>
		</Block>
		<Block>
			<Tag isColor="warning">Warning</Tag>
		</Block>
		<Block>
			<Tag isColor="danger">Danger</Tag>
		</Block>
	</>
);

export const LightColors = () => (
	<>
		<Block>
			<Tag isLight isColor="black">
				Black
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="dark">
				Dark
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="light">
				Light
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="white">
				White
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="primary">
				Primary
			</Tag>
		</Block>
		<Block>
			<Tag isLight isLink>
				Link
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="info">
				Info
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="success">
				Success
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="warning">
				Warning
			</Tag>
		</Block>
		<Block>
			<Tag isLight isColor="danger">
				Danger
			</Tag>
		</Block>
	</>
);

export const Small = Template.bind({});
Small.args = {
	isSize: "small",
	children: "Small",
	isColor: "primary",
};

export const Large = Template.bind({});
Large.args = {
	isSize: "large",
	children: "Large",
	isColor: "primary",
};
