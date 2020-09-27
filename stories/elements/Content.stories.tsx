import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Content } from "../../src/index";

// import type { Box as BoxProps } from "../../src/elements/box";

export default {
	title: "Example/Elements/Content",
	component: Content,
} as Meta;

const Template = (args: any) => (
	<Content {...args}>
		<h1>Hello World</h1>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
		metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
		nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel
		erat vel, interdum mattis neque.
		<h2>Second level</h2>
		Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit.
		Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin
		pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem
		rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.
		<ol>
			<li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
			<li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
			<li>
				Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
			</li>
		</ol>
	</Content>
);

export const Small = Template.bind({});
Small.args = {
	isSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
	isSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
	isSize: "large",
};
