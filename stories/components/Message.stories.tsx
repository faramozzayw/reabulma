import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import type { MessageProps } from "../../src/components/Message/Message";

import { Message, MessageBody, MessageHeader } from "../../src/index";

export default {
	title: "Example/Compoment/Message",
	component: Message,
} as Meta;

const Template: Story<MessageProps> = (args: MessageProps) => (
	<Message {...args}>
		<MessageHeader>Message header</MessageHeader>
		<MessageBody>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
			<strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
			nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
			diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
			<em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
			sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
			neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
		</MessageBody>
	</Message>
);

export const MessageBodyOnly: Story<MessageProps> = (args: MessageProps) => (
	<Message {...args}>
		<MessageBody>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
			<strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec
			nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
			diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
			<em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
			sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a
			neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
		</MessageBody>
	</Message>
);

export const Default = Template.bind({});
