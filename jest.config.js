module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
	],
	modulePathIgnorePatterns: [
		'<rootDir>/src/index.ts',
	],
	watchPathIgnorePatterns: [
		'<rootDir>/src/index.ts',
	],
	testPathIgnorePatterns: [
		'<rootDir>/src/index.ts',
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/index.ts',
	],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
};
