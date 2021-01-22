import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
	Card,
	CardContent,
	CardFooter,
	CardFooterItem,
	Title,
	Content,
	Image,
	CardImage,
	CardHeader,
	CardHeaderTitle,
} from "../../src/index";

export default {
	title: "Example/Compoment/Card",
	component: Card,
} as Meta;

const cardWidth = "30vw";

export const Default = (args: any) => (
	<div
		style={{
			width: cardWidth,
		}}
	>
		<Card {...args}>
			<CardContent>
				<Title tag="p">
					“There are two hard things in computer science: cache invalidation,
					naming things, and off-by-one errors.”
				</Title>
				<Title tag="p" isSubtitle>
					Jeff Atwood
				</Title>
			</CardContent>
			<CardFooter>
				<CardFooterItem>
					<span>
						View on{" "}
						<a href="https://twitter.com/codinghorror/status/506010907021828096">
							Twitter
						</a>
					</span>
				</CardFooterItem>
				<CardFooterItem>
					<span>
						Share on <a href="#">Facebook</a>
					</span>
				</CardFooterItem>
			</CardFooter>
		</Card>
	</div>
);

export const WithImages = (args: any) => (
	<div
		style={{
			width: cardWidth,
		}}
	>
		<Card {...args}>
			<CardImage>
				<Image
					isRatio="4by3"
					src="https://bulma.io/images/placeholders/1280x960.png"
					alt="Placeholder image"
				/>
			</CardImage>
			<CardContent>
				<div className="media">
					<div className="media-left">
						<Image
							isSize="48x48"
							src="https://bulma.io/images/placeholders/96x96.png"
							alt="Placeholder image"
						/>
					</div>
					<div className="media-content">
						<Title isSize="4" tag="p">
							John Smith
						</Title>
						<Title isSize="6" tag="p" isSubtitle>
							@johnsmith
						</Title>
					</div>
				</div>
				<Content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
					iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
					<a href="#">#responsive</a>
					<br />
					<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</Content>
			</CardContent>
		</Card>
	</div>
);

export const HeaderTitle = (args: any) => (
	<div
		style={{
			width: cardWidth,
		}}
	>
		<Card {...args}>
			<CardHeader>
				<CardHeaderTitle>Component</CardHeaderTitle>
				<a href="#" className="card-header-icon" aria-label="more options">
					<span className="icon">
						<i className="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</a>
			</CardHeader>
			<CardContent>
				<Content>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
					iaculis mauris.
					<a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
					<a href="#">#responsive</a>
					<br />
					<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</Content>
			</CardContent>
			<CardFooter>
				<CardFooterItem tag="a">Save</CardFooterItem>
				<CardFooterItem tag="a">Edit</CardFooterItem>
				<CardFooterItem tag="a">Delete</CardFooterItem>
			</CardFooter>
		</Card>
	</div>
);
