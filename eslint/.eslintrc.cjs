module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		// turns off formatting rules delegating this responsibility to prettier
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',

	reportUnusedDisableDirectives: true,

	// RULES
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['warn', 'single'],
		eqeqeq: ['error', 'smart'],
		'no-unexpected-multiline': 'warn',
		'max-len': [
			'warn',
			{
				code: 200,
				ignoreUrls: true,
				ignoreTrailingComments: true,
				ignoreRegExpLiterals: true,
			},
		],
		'object-curly-spacing': [
			'warn',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true,
			},
		],
		'eol-last': ['warn', 'always'],
		'no-lonely-if': 'warn',
		'lines-between-class-members': 'error',
		'func-call-spacing': ['error', 'never'],
		'valid-typeof': 'error',
		'no-mixed-operators': 'warn',
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 3,
				maxEOF: 2,
			},
		],
		'no-new-object': 'warn',
		'no-plusplus': 'warn',
		'no-trailing-spaces': 'warn',
		'no-unneeded-ternary': 'warn',
		'no-whitespace-before-property': 'error',
		'object-property-newline': [
			'warn',
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		'prefer-exponentiation-operator': 'warn',
		'space-before-function-paren': [
			'warn',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'spaced-comment': 'warn',
		'arrow-spacing': 'warn',
		'no-duplicate-imports': [
			'error',
			{
				includeExports: false,
			},
		],
		'no-var': 'error',
		'object-shorthand': [
			'warn',
			'methods',
			{
				avoidQuotes: true,
			},
		],
		'prefer-const': 'warn',
		'default-case-last': 'warn',
		'no-else-return': [
			'warn',
			{
				allowElseIf: false,
			},
		],
		'no-eq-null': 'error',
		'no-floating-decimal': 'warn',
		'no-implicit-coercion': 'warn',
		'no-return-await': 'warn',
		'no-labels': 'error',
		'no-with': 'warn',
		'require-await': 'warn',
		'wrap-iife': 'warn',
		'comma-dangle': ['warn', 'always-multiline'],
		curly: 'warn',
		'space-infix-ops': 'warn',
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'key-spacing': 'warn',
		'no-multi-spaces': [
			'warn',
			{
				ignoreEOLComments: true,
			},
		],

		// Typescript specific rules
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-require-imports': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				// ignore unused vars when named one or more _
				varsIgnorePattern: '^_+.*$',
				argsIgnorePattern: '^_+.*$',
				caughtErrorsIgnorePattern: '^_+.*$',

				// for cases like this const { unused, ...rest } = props
				ignoreRestSiblings: true,
			},
		],
	},
}
