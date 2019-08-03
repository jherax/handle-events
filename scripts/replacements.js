const { libraryName } = require('../webpack/paths');

// allows module augmentation on the library
const getReplacementsForFile = () => {
  const lib = `root["${libraryName}"]`;
  const oldValue = `${lib} = factory()`;
  const newValue = [
    `if (Object.prototype.toString.call(${lib}) === "[object Object]") {`,
    `\tvar p, f = factory(); for (p in f) ${lib}[p] = f[p];`,
    `} else ${oldValue}`,
  ].join('\n\t\t');
  return { oldValue, newValue };
};

// allows module augmentation on the library
const getReplacementsForMinified = () => {
  const oldValue = new RegExp(`\\b(\\w\\.${libraryName})=(\\w)`);
  const newValue = [
    'Object.prototype.toString.call($1)==="[object Object]"?',
    '!function(m,f,p){for(p in f)m[p]=f[p]}($1,$2()):$1=$2',
  ].join('');
  return { oldValue, newValue };
};

module.exports = {
  getReplacementsForFile,
  getReplacementsForMinified,
};
