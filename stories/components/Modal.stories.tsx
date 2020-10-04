import React, { useState } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
	Modal,
	Button,
	ModalBackground,
	ModalClose,
	Notification,
	Delete,
	Image,
	ModalContent,
} from "../../src";

export default {
	title: "Example/Compoment/Modal",
	component: Modal,
} as Meta;

export const Default = () => {
	const [isShow, toggle] = useState(false);

	return (
		<>
			<Modal isActive={isShow}>
				<ModalBackground onClick={() => toggle(false)} />
				<ModalClose onClick={() => toggle(false)} />
				<ModalContent>
					<Notification
						isColor="warning"
						style={{
							width: "50vw",
						}}
					>
						<Delete />
						Bulma does not include any JavaScript interaction. You will have to
						implement the class toggle yourself.
						<hr />
						<a
							target="_blank"
							href="https://bulma.io/documentation/components/modal/"
						>
							Read more
						</a>
					</Notification>
				</ModalContent>
			</Modal>
			<Button
				isColor="primary"
				isRounded
				onClick={() => toggle((current) => !current)}
			>
				Launch modal example
			</Button>
		</>
	);
};

export const isActive = (args: any) => (
	<>
		<Modal {...args}>
			<ModalBackground />
			<ModalContent>
				<Notification
					isColor="warning"
					style={{
						width: "50vw",
					}}
				>
					Change <strong>isActive</strong>!
				</Notification>
			</ModalContent>
		</Modal>
		<Notification
			isColor="success"
			style={{
				width: "50vw",
			}}
		>
			Change <strong>isActive</strong>!
		</Notification>
	</>
);
isActive.args = {
	isActive: false,
};

export const ImageModal = (args: any) => (
	<>
		<Modal {...args}>
			<ModalBackground />
			<ModalContent>
				<Image
					src="https://bulma.io/images/placeholders/1280x960.png"
					alt=""
					isRatio="4by3"
				/>
			</ModalContent>
		</Modal>
		<Notification
			isColor="success"
			style={{
				width: "50vw",
			}}
		>
			Change <strong>isActive</strong>!
		</Notification>
	</>
);
ImageModal.args = {
	isActive: false,
};
