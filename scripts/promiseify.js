const promiseify = func => (...args) => (
  new Promise((resolve, reject) => {
    func(...args, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  })
);

module.exports = promiseify;
