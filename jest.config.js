/** @type {import("jest").Config} **/
export default {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
};
