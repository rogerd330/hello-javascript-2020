const sum = require("./lib/sum.js");

test("is 1 + 2 = 3?", () => {
    expect(sum(1, 2)).toBe(3);
});