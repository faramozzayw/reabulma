# Reabulma

A set of React components for Bulma

![](https://badgen.net/bundlephobia/min/@faramo.zayw/reabulma)
![](https://badgen.net/npm/v/@faramo.zayw/reabulma)
![](https://badgen.net/npm/types/@faramo.zayw/reabulma)
![](https://badgen.net/bundlephobia/dependency-count/@faramo.zayw/reabulma)

Here is a short list of most important features that `@faramo.zayw/reabulma` has:

- 🚀 Minimum dependencies
- 🔨 Types out of the box
- 🔥 Storybook docs

## Supporting IE11 and obsolete platforms

This library uses features like destructuring assignment, `for..of` and `const/let` declarations and doesn't ship with ES5 transpiled sources. If you aim to support browsers like IE11 and below → make sure you run Babel over your `node_modules`

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
