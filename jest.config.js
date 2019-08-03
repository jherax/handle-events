/**
 * @see configuration
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  roots: ['<rootDir>/src'],
  testRegex: '/.*\\.(test|spec)\\.js$',
  testEnvironment: 'jsdom',
};
