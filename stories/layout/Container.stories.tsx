import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Container, Notification } from "../../src/index";

export default {
	title: "Example/Layout/Container",
	component: Container,
} as Meta;

export const Example = (args: any) => (
	<>
		<Container {...args}>
			<Notification>
				The container is a simple utility element that allows you to center
				content on larger viewports.
			</Notification>
		</Container>
		<hr />
		<Notification>Where my container?</Notification>
	</>
);
