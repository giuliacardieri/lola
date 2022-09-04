const path = require('path')

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/vue3",
  core: {
    builder: "webpack5"
  },
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
		},
	},
	webpackFinal: async (config, { configType }) => {
		config.resolve.extensions.push('.vue', '.css', '.scss')
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/'),
		}
		return config
	},
}
