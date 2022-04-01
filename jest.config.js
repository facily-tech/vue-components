const importFile = '<rootDir>/src/index.ts';

module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
	],
	modulePathIgnorePatterns: [
		importFile,
	],
	watchPathIgnorePatterns: [
		importFile,
	],
	testPathIgnorePatterns: [
		importFile,
		'<rootDir>/node_modules/',
	],
	coveragePathIgnorePatterns: [
		importFile,
	],
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
};
