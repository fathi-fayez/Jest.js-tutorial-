const allData = require("../all");

test("Check If Array Contains 5 Elements", () => {
  expect(allData.length).toBe(5);
});

test("Check If Array Contains 5 Elements", () => {
  expect(allData).toHaveLength(5);
});

test("Check If Array Contains  Number 5 ", () => {
  expect(allData).toContain(5);
});

test("Check If Array Not Contains Number 5 ", () => {
  expect(allData).not.toContain(6);
});

test("Check If Array Not Contains Number 0 ", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});
test("Check If Array Contains  Only Numbers 1st Method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});
test("Check If Array Contains  Only Numbers 2st Method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});
test("Check If Array Contains  Only Numbers 3st Method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});
test("Check If Array First Element Larger Than 1", () => {
  expect(allData[0]).toBeGreaterThan(0);
});
test("Check If Array First Element Less Than 5", () => {
  expect(allData[0]).toBeLessThan(5);
});
test("Check For Substring Inside String By RegExp", () => {
  let myString = "I Love My Brother";
  expect(myString).toMatch(/Brother/);
});
test("Check For Property Age", () => {
  let myObject = {
    name: "fathi",
    age: 22,
  };
  expect(myObject).toHaveProperty("name");
});

// created matchers
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000
expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} To Be Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} To Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

expect.extend({
  toBeBetween(received, start, end) {
    const pass = received > start && received < end;
    if (pass) {
      return {
        message: () =>
          `Expected ${received} To Be Between  ${start} And ${end}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} To Be Between  ${start} And ${end}`,
        pass: false,
      };
    }
  },
});
// 000000000000000000000000000000000000000000000000000000000000000000000000000000000000

test("Check If Number Is Larger Than Other Number", () => {
  expect(10).toBeLargerThan(9);
});
test("Check If Value Is In The Range", () => {
  expect(1982).toBeBetween(1900, 2000);
});
test("Expect Anything", () => {
  expect("fathi").toEqual(expect.anything());
});
test("Expect Any Constructor", () => {
  expect(4).toEqual(expect.any(Number));
});
test("Expect Array To Be Found In The Main Array", () => {
  const myArray = [1, 2, 3, 4, 5];
  expect(myArray).toEqual(expect.arrayContaining([1, 2]));
});
