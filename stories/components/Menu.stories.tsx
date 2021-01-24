import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Menu, MenuLabel, MenuList, MenuLink } from "../../src/index";
import type { MenuProps } from "../../src/components/Menu/Menu";

export default {
	title: "Example/Compoment/Menu",
	component: Menu,
} as Meta;

export const Default: Story<MenuProps> = (args: MenuProps) => (
	<Menu {...args} style={{ width: "300px" }}>
		<MenuLabel>General</MenuLabel>
		<MenuList>
			<li>
				<MenuLink>Dashboard</MenuLink>
			</li>
			<li>
				<MenuLink>Customers</MenuLink>
			</li>
		</MenuList>
		<MenuLabel>Administration</MenuLabel>
		<MenuList>
			<li>
				<MenuLink>Team Settings</MenuLink>
			</li>
			<li>
				<MenuLink isActive>Manage Your Team</MenuLink>
			</li>
			<li>
				<MenuList>
					<li>
						<MenuLink>Members</MenuLink>
					</li>
					<li>
						<MenuLink>Plugins</MenuLink>
					</li>
					<li>
						<MenuLink>Add a Member</MenuLink>
					</li>
				</MenuList>
			</li>
			<li>
				<MenuLink>Invitations</MenuLink>
			</li>
			<li>
				<MenuLink>Authentication</MenuLink>
			</li>
		</MenuList>
		<MenuLabel>Transactions</MenuLabel>
		<MenuList>
			<li>
				<MenuLink>Payments</MenuLink>
			</li>
			<li>
				<MenuLink>Transfers</MenuLink>
			</li>
			<li>
				<MenuLink>Balance</MenuLink>
			</li>
		</MenuList>
	</Menu>
);
