import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field } from "../../src/index";

export default {
	title: "Example/Form/Control",
	component: Control,
} as Meta;

export const Default = (args: any) => (
	<Field>
		<Control {...args}>
			<input className="input" type="text" placeholder="Text input" />
		</Control>
	</Field>
);

export const HasIconLeft = (args: any) => (
	<Field>
		<Control {...args}>
			<input className="input" type="text" placeholder="Text input" />
			<span className="icon is-small is-left">
				<i className="fas fa-envelope"></i>
			</span>
		</Control>
	</Field>
);

HasIconLeft.args = {
	hasIconsLeft: true,
};

export const HasIconRight = (args: any) => (
	<Field>
		<Control {...args}>
			<input className="input" type="text" placeholder="Text input" />
			<span className="icon is-small is-right">
				<i className="fas fa-envelope"></i>
			</span>
		</Control>
	</Field>
);

HasIconRight.args = {
	hasIconsRight: true,
};

export const HasBothIcons = (args: any) => (
	<Field>
		<Control {...args}>
			<input className="input" type="text" placeholder="Text input" />
			<span className="icon is-small is-left">
				<i className="fas fa-envelope"></i>
			</span>
			<span className="icon is-small is-right">
				<i className="fas fa-check"></i>
			</span>
		</Control>
	</Field>
);

HasBothIcons.args = {
	hasIconsRight: true,
	hasIconsLeft: true,
};
