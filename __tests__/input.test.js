const theFilter = require("../input");

describe("Validate Input", () => {
  test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe("Unknown");
  });

  test.only("Check For Spaces (start + end)", () => {
    expect(theFilter("  fathi  ")).toBe("fathi");
  });

  test.skip("Check If Name Length > 10 Characters", () => {
    expect(theFilter("fathi_fayez_fathi")).toBe("fathi_faye");
  });

  test("Check If Name Starts With Underscore", () => {
    expect(theFilter("_fathi")).toBe("fathi");
  });
});
