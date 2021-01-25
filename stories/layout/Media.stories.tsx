import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
	Image,
	Level,
	LevelItem,
	Media,
	MediaLeft,
	MediaContent,
	Title,
	Content,
	LevelLeft,
	Icon,
} from "../../src/index";

export default {
	title: "Example/Layout/Level",
	component: Level,
} as Meta;

export const Example1 = (args: any) => (
	<Media {...args}>
		<MediaLeft tag="figure">
			<Image
				isSize="64x64"
				src="https://bulma.io/images/placeholders/128x128.png"
			/>
		</MediaLeft>
		<MediaContent>
			<Content>
				<p>
					<strong>John Smith</strong> <small>@johnsmith</small>{" "}
					<small>31m</small>
					<br />
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
					magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
					sem. Etiam finibus odio quis feugiat facilisis.
				</p>
			</Content>
			<Level>
				<LevelLeft>
					<LevelItem>
						<Icon isSize="small" icon="fas fa-reply" />
					</LevelItem>
					<LevelItem>
						<Icon isSize="small" icon="fas fa-retweet" />
					</LevelItem>
					<LevelItem>
						<Icon isSize="small" icon="fas fa-heart" />
					</LevelItem>
				</LevelLeft>
			</Level>
		</MediaContent>
	</Media>
);
