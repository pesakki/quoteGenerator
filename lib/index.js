const arr = require("../data/data.json");

let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let index = randomInt(0, arr.length);

 getRandomQuote = () => arr[index].text;

 getSuccessQuote = (options) => {
  !options && (options = { author: true });
  return {
    text: arr[index].text,
    ...(options && options.author ? { author: arr[index].from } : {}),
  };
};

module.exports = {
  getRandomQuote,
  getSuccessQuote,
};
