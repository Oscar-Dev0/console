const { square, center, removeANSIFormat } = require("./functions");

const consoleExtensions = {
  square,
  center,
  removeANSIFormat,
};

const consoleProxy = new Proxy(console, {
  get(target, property) {
    if (property in consoleExtensions) {
      return consoleExtensions[property];
    }
    return target[property];
  },
});

console = consoleProxy;