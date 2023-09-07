const { getQuote, getRandomQuote } = require("../lib/index");

console.log("Random Quote:");
console.log(getRandomQuote());

console.log("dcsfv s",getSuccessQuote().text);

console.log(getSuccessQuote({ author: false }));