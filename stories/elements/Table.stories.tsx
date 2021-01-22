import React from "react";
import type { Story, Meta } from "@storybook/react/types-6-0";

import { Table, TableContainer } from "../../src/index";

export default {
	title: "Example/Elements/Table",
	component: Table,
} as Meta;

const Template = (args: any) => (
	<Table {...args}>
		<thead>
			<tr>
				<th>One</th>
				<th>Two</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Three</td>
				<td>Four</td>
			</tr>
			<tr>
				<td>Five</td>
				<td>Six</td>
			</tr>
			<tr>
				<td>Seven</td>
				<td>Eight</td>
			</tr>
			<tr>
				<td>Nine</td>
				<td>Ten</td>
			</tr>
			<tr>
				<td>Eleven</td>
				<td>Twelve</td>
			</tr>
		</tbody>
	</Table>
);

export const Bordered = Template.bind({});
Bordered.args = {
	isBordered: true,
};

export const Striped = Template.bind({});
Striped.args = {
	isStriped: true,
};

export const Narrow = Template.bind({});
Narrow.args = {
	isNarrow: true,
};

export const Hoverable = Template.bind({});
Hoverable.args = {
	isHoverable: true,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
	isFullWidth: true,
};

export const Combine = Template.bind({});
Combine.args = {
	isBordered: true,
	isStriped: true,
	isNarrow: true,
	isHoverable: true,
	isFullWidth: true,
};

export const TableContainerExample = (args: any) => {
	let table = [];

	let v = 1;
	for (let i = 0; i < 5; i++) {
		let row = [];
		for (let j = 0; j < 40; j++) {
			row.push(<td>{v}</td>);
			v++;
		}
		table.push(<tr>{row}</tr>);
	}

	return (
		<TableContainer>
			<Table {...args}>
				<tbody>{table}</tbody>
			</Table>
		</TableContainer>
	);
};
