const { getArrayItemFromObject } = require("../array");

/*

17/02/2022

Testing these utils for proper array display

*/

test("Should [getArrayItemFromObject] return simple array", async () => {
  const input = [
    {
      info: "Testing...",
      index: 0,
    },
    {
      info: "Testing...",
      index: 1,
    },
    {
      info: "Testing...",
      index: 3,
    },
  ];

  const result = await getArrayItemFromObject(input, "info");
  expect(result[0]).toBe("Testing...");
});

test("Should [getArrayItemFromObject] handle no key found", async () => {
  const input = [
    {
      info: "Testing...",
      index: 0,
    },
    {
      info: "Testing...",
      index: 1,
    },
    {
      info: "Testing...",
      index: 3,
    },
  ];

  const result = await getArrayItemFromObject(input, "unknown_key");
  expect(result[2]).toBe(undefined); // Want to return undefined AND NOT a blank string OR NULL
});
