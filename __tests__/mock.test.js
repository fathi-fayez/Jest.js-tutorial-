const mocker = require("../mock");

test("mock function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("fathi")).toBe("Hello fathi");
  expect(mocker("ahmed")).toBe("Hello ahmed");
  expect(mocker("salem")).toBe("Hello salem");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledTimes(3);
  expect(mocker).toHaveBeenCalledWith("fathi");
  expect(mocker).toHaveBeenLastCalledWith("fathi");
});
