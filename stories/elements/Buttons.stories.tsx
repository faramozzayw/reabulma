import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, Buttons as ButtonsComponent } from "../../src/index";
import type { ButtonsProps } from "../../src/elements/Button/Buttons";

export default {
	title: "Example/Elements/Buttons",
	component: ButtonsComponent,
	argTypes: {
		onClick: { action: "clicked" },
	},
} as Meta;

export const List = (args: any) => (
	<ButtonsComponent>
		<Button>One</Button>
		<Button>Two</Button>
		<Button>Three</Button>
		<Button>Four</Button>
		<Button>Five</Button>
		<Button>Six</Button>
		<Button>Seven</Button>
		<Button>Eight</Button>
		<Button>Nine</Button>
		<Button>Ten</Button>
		<Button>Eleven</Button>
		<Button>Twelve</Button>
		<Button>Thirteen</Button>
		<Button>Fourteen</Button>
		<Button>Fifteen</Button>
		<Button>Sixteen</Button>
		<Button>Seventeen</Button>
		<Button>Eighteen</Button>
		<Button>Nineteen</Button>
		<Button>Twenty</Button>
	</ButtonsComponent>
);

export const HasAddons = (args: any) => (
	<ButtonsComponent {...args}>
		<Button isColor="success">Save changes</Button>
		<Button isColor="info">Save and continue</Button>
		<Button isColor="danger">Cancel</Button>
	</ButtonsComponent>
);

HasAddons.args = {
	hasAddons: true,
};

export const HasAddonsCentered = (args: any) => (
	<ButtonsComponent {...args}>
		<Button isColor="success">Save changes</Button>
		<Button isColor="info">Save and continue</Button>
		<Button isColor="danger">Cancel</Button>
	</ButtonsComponent>
);

HasAddonsCentered.args = {
	hasAddons: true,
	isAlign: "centered",
};
