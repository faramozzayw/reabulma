# Reabulma

A set of React components for Bulma

![](https://badgen.net/bundlephobia/min/@faramo.zayw/reabulma)
![](https://badgen.net/npm/v/@faramo.zayw/reabulma)
![](https://badgen.net/npm/types/@faramo.zayw/reabulma)
![](https://badgen.net/bundlephobia/dependency-count/@faramo.zayw/reabulma)

## Storybook

[Demo Link](https://reabulma.vercel.app/)

## Install

Using npm

```sh
npm i @faramo.zayw/reabulma
```

Using yarn

```sh
yarn add @faramo.zayw/reabulma
```

## Usage

```jsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Title } from "@faramo.zayw/reabulma";

ReactDOM.render(
	<Container>
		<Title isSize="4">Hello World!</Title>
	</Container>,
	document.getElementById("root"),
);
```
