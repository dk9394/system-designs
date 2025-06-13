import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': 'warn',
			semi: ['error', 'always'],
			quotes: ['warn', 'single'],
		},
	},
	tseslint.configs.recommended,
	globalIgnores(['node_modules/', 'dist/', '**/*.min.js']),
]);
