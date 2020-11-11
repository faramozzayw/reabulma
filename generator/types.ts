import "./hbs";

export interface Modifier {
	readonly hasFn?: boolean;
	readonly name: string;
	readonly className: Pick<HTMLElement, "className">;
}

export interface Component {
	readonly react17?: boolean;
	readonly name: string;
	readonly componentClassName: string;
	readonly defaultTag: keyof React.ReactHTML;

	readonly modifiers?: Modifier[];

	readonly type: string;
}
