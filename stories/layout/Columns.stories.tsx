import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Notification, Columns, Column } from "../../src/index";
import { ColumnsProps } from "../../src/columns/columns";
import { ColumnProps } from "../../src/columns/column";

export default {
	title: "Example/Columns/Example",
	component: Columns,
	subcomponents: { Column },
} as Meta;

type ColumnT = ColumnProps & {
	text: string;
};

interface TemplateProps {
	items: ColumnT[];
}

const defaultColumnProps: ColumnProps = {
	isSize: "1/2",
};

const defaultProps: TemplateProps = {
	items: [
		{
			text: "1",
			...defaultColumnProps,
		},
		{
			text: "2",
			...defaultColumnProps,
		},
		{
			text: "3",
			...defaultColumnProps,
		},
		{
			text: "4",
			...defaultColumnProps,
			isSize: {
				mobile: "full",
				desktop: "1/4",
			},
			isOffset: "3/4",
		},
	],
};

const Template: Story<TemplateProps> = ({ items, ...args }) => (
	<Columns {...args}>
		{items.map(({ text, ...props }) => (
			<Column {...props}>
				<Notification isColor="dark">{text}</Notification>
			</Column>
		))}
	</Columns>
);

export const Default: Story<TemplateProps> = Template.bind({});
Default.args = {
	...defaultProps,
};
