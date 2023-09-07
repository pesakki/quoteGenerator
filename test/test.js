const chai = require("chai");
const expect = chai.expect;
const { getRandomQuote, getSuccessQuote } = require("../lib/index"); // Replace 'your-module' with the actual path to your module.

describe("Testing getRandomQuote", () => {
  it("should return a string", () => {
    const quote = getRandomQuote();
    expect(quote).to.be.a("string");
  });

  it("should have a length greater than 5", () => {
    const quote = getRandomQuote();
    expect(quote.length).to.be.greaterThan(5);
  });
});

describe("Testing getSuccessQuote", () => {
  it("should return an object with text", () => {
    const quoteObj = getSuccessQuote();
    expect(quoteObj).to.be.an("object");
    expect(quoteObj).to.have.property("text");
  });

  it("should include author if options.author is true", () => {
    const quoteObj = getSuccessQuote({ author: true });
    expect(quoteObj).to.have.property("author");
  });

  it("should not include author if options.author is false", () => {
    const quoteObj = getSuccessQuote({ author: false });
    expect(quoteObj).to.not.have.property("author");
  });
});
