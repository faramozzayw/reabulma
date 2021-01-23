import "bulma/css/bulma.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { themes } from "@storybook/theming";

export const parameters = {
	actions: {
		argTypesRegex: "^on[A-Z].*",
	},
	docs: {
		theme: themes.dark,
	},
};
