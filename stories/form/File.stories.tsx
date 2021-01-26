import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Control, Field, File } from "../../src/index";

import type { FileProps } from "../../src/form/File";

export default {
	title: "Example/Form/File",
	component: File,
} as Meta;

const Template: Story<FileProps> = (args: FileProps) => (
	<Field>
		<Control>
			<File {...(args as FileProps)} />
		</Control>
	</Field>
);

export const Default: Story<FileProps> = Template.bind({});
