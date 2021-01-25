import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Level, LevelItem, Title } from "../../src/index";

export default {
	title: "Example/Layout/Level",
	component: Level,
} as Meta;

export const Example1 = (args: any) => (
	<Level {...args}>
		<LevelItem className="has-text-centered">
			<div>
				<p className="heading">Tweets</p>
				<Title>3,456</Title>
			</div>
		</LevelItem>
		<LevelItem className="has-text-centered">
			<div>
				<p className="heading">Following</p>
				<Title>123</Title>
			</div>
		</LevelItem>
		<LevelItem className="has-text-centered">
			<div>
				<p className="heading">Followers</p>
				<Title>456K</Title>
			</div>
		</LevelItem>
		<LevelItem className="has-text-centered">
			<div>
				<p className="heading">Likes</p>
				<Title>789</Title>
			</div>
		</LevelItem>
	</Level>
);
