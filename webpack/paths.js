const { resolve } = require('path');

const dist = resolve(__dirname, '../dist');
const source = resolve(__dirname, '../src');

module.exports = {
  project: resolve(__dirname, '../'),
  dist: {
    folder: dist,
    js: resolve(dist, 'handle-events.js'),
  },
  source: {
    folder: source,
    js: resolve(source, 'main.js'),
  },
  libraryName: 'jsu',
};
