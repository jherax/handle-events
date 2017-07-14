const fs = require('fs');
const PATH = require('../webpack/paths');
const config = require('../webpack/build');

/**
 * Search for a pattern in a file, to replace text.
 *
 * @param {String} path: the file path to where replace the text.
 * @param {String|RegExp} oldText: pattern to search for.
 * @param {String} newText: new text replaced.
 */
function replace(path, oldText, newText) {
  let replacement;
  fs.readFile(path, 'utf8', (error, data) => {
    if (error) throw Error(`Can't read ${path}`);
    replacement = data.replace(oldText, newText);

    fs.writeFile(path, replacement, 'utf8', (err) => {
      if (err) throw Error(`Can't update ${path}`);
    });
  });
}

// allows module augmentation on the library
const lib = `root["${config.output.library}"]`;
let oldValue = `${lib} = factory()`;
let newValue = [
  `if (Object.prototype.toString.call(${lib}) === "[object Object]") {`,
  `\tvar p, f = factory(); for (p in f) ${lib}[p] = f[p];`,
  `} else ${oldValue}`,
].join('\n\t\t');
replace(PATH.dist.js, oldValue, newValue);

// allows module augmentation on the minified file
oldValue = new RegExp(`\\b(\\w\\.${config.output.library})=(\\w)`);
newValue = [
  'Object.prototype.toString.call($1)==="[object Object]"?',
  '!function(m,f,p){for(p in f)m[p]=f[p]}($1,$2()):$1=$2',
].join('');
replace(PATH.dist.min, oldValue, newValue);
