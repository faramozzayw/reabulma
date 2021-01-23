import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import type { DropdownProps } from "../../src/components/Dropdown/Dropdown";

import {
	Button,
	Dropdown,
	DropdownContent,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	DropdownDivider,
	Icon,
	Notification,
} from "../../src/index";

export default {
	title: "Example/Compoment/Dropdown",
	component: Dropdown,
} as Meta;

const Template = (args: DropdownProps) => (
	<div>
		<Notification isColor="success">
			While the CSS :hover implementation works perfectly, the is-active class
			is available for users who want to control the display of the dropdown
			with JavaScript.
		</Notification>
		<Dropdown {...args}>
			<DropdownTrigger>
				<Button isOutlined aria-haspopup="true" aria-controls="dropdown-menu">
					<span>Dropdown button</span>{" "}
					<Icon icon="fas fa-sort-down" isSize="small" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownContent>
					<DropdownItem href="#">Dropdown item</DropdownItem>
					<DropdownItem href="#">Other dropdown item</DropdownItem>
					<DropdownItem href="#" isActive>
						Active dropdown item
					</DropdownItem>
					<DropdownItem href="#">Other dropdown item</DropdownItem>
					<DropdownDivider />
					<DropdownItem>
						<p>
							You can insert <strong>any type of content</strong> within the
							dropdown menu.
						</p>
					</DropdownItem>
				</DropdownContent>
			</DropdownMenu>
		</Dropdown>
	</div>
);

export const Hoverable: Story<DropdownProps> = Template.bind({});
Hoverable.args = {
	isHoverable: true,
};

export const Toggle = (args: DropdownProps) => {
	const [isToggle, setToggle] = useState(false);
	const toggle = () => setToggle((prev) => !prev);

	return (
		<Dropdown {...args} isActive={isToggle}>
			<DropdownTrigger>
				<Button
					isOutlined
					aria-haspopup="true"
					aria-controls="dropdown-menu"
					onClick={toggle}
				>
					<span>Dropdown button</span>{" "}
					<Icon icon="fas fa-sort-down" isSize="small" />
				</Button>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownContent>
					<DropdownItem href="#">Dropdown item</DropdownItem>
					<DropdownItem href="#">Other dropdown item</DropdownItem>
					<DropdownItem href="#" isActive>
						Active dropdown item
					</DropdownItem>
					<DropdownItem href="#">Other dropdown item</DropdownItem>
					<DropdownDivider />
					<DropdownItem>
						<p>
							You can insert <strong>any type of content</strong> within the
							dropdown menu.
						</p>
					</DropdownItem>
				</DropdownContent>
			</DropdownMenu>
		</Dropdown>
	);
};
