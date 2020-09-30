import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Delete, Block, Tag, Notification } from "../../src/index";

export default {
	title: "Example/Elements/Delete",
	component: Delete,
} as Meta;

export const Default = (args: any) => <Delete {...args} />;

export const Sizes = () => (
	<>
		<Delete isSize="small" />
		<Delete isSize="normal" />
		<Delete isSize="medium" />
		<Delete isSize="large" />
	</>
);

export const Combinations = () => (
	<>
		<Block>
			<Tag isColor="success">
				Hello World
				<Delete isSize="small" />
			</Tag>
		</Block>

		<Notification isColor="danger">
			<Delete />
			Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor
			sit amet, consectetur adipiscing elit
		</Notification>
	</>
);
