module.exports = {
  collectCoverageFrom: ['src/**/*.js?(x)'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/**/*.spec.js'],
};
