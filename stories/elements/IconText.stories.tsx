import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { IconTextProps } from "../../src/elements/icon-text";
import { Block, Content, Icon, IconText } from "./../../src/index";

export default {
	title: "Example/Elements/IconText",
	component: IconText,
} as Meta;

const Template: Story<IconTextProps> = (args: IconTextProps) => (
	<IconText {...args} />
);

export const BaseExample: Story<IconTextProps> = Template.bind({});
BaseExample.args = {
	children: (
		<>
			<Icon icon="fas fa-home" />
			<span>Home</span>
		</>
	),
};

export const ManyIcons: Story<IconTextProps> = Template.bind({});
BaseExample.args = {
	children: (
		<>
			<Icon icon="fas fa-home" />

			<span>Paris</span>
			<Icon icon="fas fa-arrow-right" />

			<span>Budapest</span>
			<Icon icon="fas fa-arrow-right" />

			<span>Bucharest</span>
			<Icon icon="fas fa-arrow-right" />

			<span>Istanbul</span>
			<Icon icon="fas fa-flag-checkered" />
		</>
	),
};

export const AsPartOfText = () => (
	<Content>
		<p>
			An invitation to
			<IconText>
				<Icon icon="fas fa-utensils" />
				<span>dinner</span>
			</IconText>
			was soon afterwards dispatched; and already had Mrs. Bennet planned the
			courses that were to do credit to her housekeeping, when an answer arrived
			which deferred it all. Mr. Bingley was obliged to be in
			<IconText>
				<Icon icon="fas fa-city" />
				<span>town</span>
			</IconText>
			the following day, and, consequently, unable to accept the honour of their
			<IconText>
				<Icon icon="fas fa-envelope-open-text" />
				<span>invitation</span>
			</IconText>
			, etc.
		</p>

		<p>
			Mrs. Bennet was quite disconcerted. She could not imagine what business he
			could have in town so soon after his
			<IconText>
				<Icon icon="fas fa-flag-checkered" />
				<span>arrival</span>
			</IconText>
			in Hertfordshire; and she began to fear that he might be always
			<IconText>
				<Icon icon="fas fa-plane-departure" />
				<span>flying</span>
			</IconText>
			about from one place to another, and never settled at Netherfield as he
			ought to be.
		</p>
	</Content>
);

export const InformationBars = () => (
	<>
		<IconText tag="div">
			<Icon hasTextColor="info" icon="fas fa-info-circle" />
			<span>Information</span>
		</IconText>

		<Block>
			Your package will be delivered on <strong>Tuesday at 08:00</strong>.
		</Block>

		<IconText tag="div">
			<Icon hasTextColor="success" icon="fa-check-square" />
			<span>Success</span>
		</IconText>

		<Block>Your image has been successfully uploaded.</Block>

		<IconText tag="div">
			<Icon hasTextColor="warning" icon="fas fa-exclamation-triangle" />
			<span>Warning</span>
		</IconText>

		<Block>
			Some information is missing from your <a href="#">profile</a> details.
		</Block>

		<IconText tag="div">
			<Icon hasTextColor="danger" icon="fas fa-ban" />
			<span>Danger</span>
		</IconText>

		<Block>
			There was an error in your submission. <a href="#">Please try again</a>.
		</Block>
	</>
);
