const theSum = require("../sum");

// test(name, fn, timeout)
// it(name, fn, timeout)
// describe(name, fn)

describe("Check The Numbers Sum Total", () => {
  test("Return 0 If No Number", () => {
    expect(theSum()).toBe(0);
  });

  test("Return The Number", () => {
    expect(theSum(10)).toBe(10);
  });

  test("Return Number Plus Number", () => {
    expect(theSum(15, 25)).toBe(40);
  });

  test("Return Number Plus Number Plus Number", () => {
    expect(theSum(10, 20, 30)).toBe(60);
  });

  test("Return The Sum Results Of All Numbers", () => {
    expect(theSum(10, 20, 30)).toBe(60);
  });
});
