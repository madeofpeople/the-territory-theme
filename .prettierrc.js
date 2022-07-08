module.exports = {
	...require( '@wordpress/prettier-config' ),
  'endOfLine': 'auto',
	overrides: [
		{
			files: '*.scss',
			options: {
				singleQuote: true,
			},
		},
	],
};
