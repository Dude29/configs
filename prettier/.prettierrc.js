module.exports = {
	$schema: 'http://json.schemastore.org/prettierrc',

	// wrap lines around 120 chars in length
	printWidth: 120,

	// indent with tabs
	useTabs: true,

	// 4 space per tab
	tabWidth: 4,

	// don't use semicolons at the end of statements(it's not 2010 anymore)
	semi: false,

	// always use ' instead of "
	singleQuote: true,

	// only quote object properties if necessary
	quoteProps: 'as-needed',

	// add trailing commas to object props and array elements
	trailingComma: 'es5',

	// print spaces between brackets in object literals.
	bracketSpacing: true,

	// x => {} becomes (x) => {}
	arrowParens: 'always',

	// macOS/Linux style
	endOfLine: 'lf',
}
