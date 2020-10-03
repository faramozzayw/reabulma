import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Block, Notification } from "../../src/index";

export default {
	title: "Example/Elements/Block",
	component: Block,
} as Meta;

export const BlockExample = () => (
	<>
		<Block>
			This text is within a <strong>block</strong>.
		</Block>
		<Block>
			This text is within a <strong>second block</strong>. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. Aenean efficitur sit amet massa
			fringilla egestas. Nullam condimentum luctus turpis.
		</Block>
		<Block>
			This text is within a <strong>third block</strong>. This block has no
			margin at the bottom.
		</Block>
		<div>
			This text is <em>not</em> within a <strong>block</strong>.
		</div>
		<div>
			This text <em>isn't</em> within a <strong>block</strong> either. Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
			amet massa fringilla egestas. Nullam condimentum luctus turpis.
		</div>
		<div>
			This text is also <em>not</em> within a <strong>block</strong>.
		</div>
	</>
);
