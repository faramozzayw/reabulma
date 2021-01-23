import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import type { PaginationProps } from "../../src/components/Pagination/Pagination";

import {
	Pagination,
	PageEllipsis,
	PageList,
	PagеLink,
	PagеControl,
} from "../../src/index";

export default {
	title: "Example/Compoment/Pagination",
	component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args: PaginationProps) => (
	<Pagination {...args} role="navigation" aria-label="pagination">
		<PagеControl isPrevious>Previous</PagеControl>
		<PagеControl isNext>Next</PagеControl>
		<PageList>
			<li>
				<PagеLink>1</PagеLink>
			</li>
			<li>
				<PageEllipsis>&hellip;</PageEllipsis>
			</li>
			<li>
				<PagеLink>11</PagеLink>
			</li>
			<li>
				<PagеLink isActive>12</PagеLink>
			</li>
			<li>
				<PagеLink>13</PagеLink>
			</li>
			<li>
				<PageEllipsis>&hellip;</PageEllipsis>
			</li>
			<li>
				<PagеLink>50</PagеLink>
			</li>
		</PageList>
	</Pagination>
);

export const Default = Template.bind({});
