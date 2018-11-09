const fs = require('fs');
const chalk = require('chalk');
const promiseify = require('./promiseify');
const {
  getReplacementsForFile,
  getReplacementsForMinified,
} = require('./replacements');
const PATH = require('../webpack/paths');

const {log} = console;
const readFile = promiseify(fs.readFile);
const writeFile = promiseify(fs.writeFile);

const BASE_PATH = /.+[\\/](.+[\\/].+)$/;

/**
 * Searches for a pattern in a file, and replace the text.
 *
 * @param {String} path: the path to the file to replace the text.
 * @param {String|RegExp} oldText: pattern to search for.
 * @param {String} newText: the replacement.
 * @return {Promise}
 */
function replace(path, oldText, newText) {
  const rpath = path.replace(BASE_PATH, '$1');
  return readFile(path, 'utf8')
    .then((data) => {
      const message = `Text not found in ${rpath}`;
      const replacement = data.replace(oldText, newText);
      if (replacement === data) return {path, message, oldText};
      return {path, replacement};
    })
    .catch(() => { throw Error(`Can't read ${rpath}`); });
}

/**
 * Writes a file.
 *
 * @param {String} path: the path to the file to be written.
 * @param {String} replacement: the text to write.
 * @return {Promise}
 */
function write(path, replacement) {
  const rpath = path.replace(BASE_PATH, '$1');
  return writeFile(path, replacement, 'utf8')
    .then(() => chalk.green(`Replacement OK in ${rpath}`))
    .catch(() => { throw Error(`Can't update ${rpath}`); });
}

const onFail = error => log(chalk.red(error));
const textNotFound = d => `${chalk.redBright(d.message)}  ${chalk.cyan(d.oldText)}`;
const onSuccessRead = d => (d.replacement ? write(d.path, d.replacement) : textNotFound(d));
const onSuccessWrite = message => log(message);

const rf = getReplacementsForFile();
const rm = getReplacementsForMinified();

replace(PATH.dist.js, rf.oldValue, rf.newValue)
  .then(d => (d.replacement ? d : replace(PATH.dist.js, rm.oldValue, rm.newValue)))
  .then(onSuccessRead)
  .then(onSuccessWrite)
  .catch(onFail);

replace(PATH.dist.min, rm.oldValue, rm.newValue)
  .then(onSuccessRead)
  .then(onSuccessWrite)
  .catch(onFail);
