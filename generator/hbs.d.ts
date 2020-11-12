declare module "*.hbs" {}

export declare module Generator {
	export interface ModifierOptions {
		[key: string]: Generator.Modifier;
	}

	export interface Interface {
		[key: string]: {
			type: any;
			optional?: boolean;
		};
	}

	export interface Modifier {
		readonly hasFn?: boolean;
		readonly name: string;
		readonly className: Pick<HTMLElement, "className"> | string;
		readonly interface?: Interface;
	}

	export interface Component {
		readonly react17?: boolean;
		readonly to: string;
		readonly name: string;
		readonly componentClassName: string;
		readonly defaultTag: keyof React.ReactHTML;

		readonly modifiers?: Modifier[];

		readonly type: string;
	}
}
