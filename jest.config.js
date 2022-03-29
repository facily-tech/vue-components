module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).{js,jsx,ts,tsx}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
};
