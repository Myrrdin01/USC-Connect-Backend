const { datePresentation, mongoDBDateDisplay } = require("../date");

/*

11/02/2022

Testing these utils for proper readable human data

*/

test("Should [datePresentation] return reasonable error", () => {
  const input = new Date("");
  const result = datePresentation(input);

  // Testing null / no input

  expect(result.day).toBe("00");
  expect(result.month).toBe("----");
  expect(result.day_nth).toBe("00");
  expect(result.year).toBe("0000");
  expect(result.hour).toBe("00");
  expect(result.min).toBe("00");
  expect(result.sec).toBe("00");
  expect(result.day_name).toBe("----");
  expect(result.amOrpm).toBe("");
});

test("Should [datePresentation] output human readable date", () => {
  const input = new Date("2022-02-11T13:59:18.540Z");
  const result = datePresentation(input);

  // Testing Date Input from RAW to Human Readable

  expect(result.month).toBe("February");
  expect(result.day).toBe("11");
  expect(result.day_nth).toBe("11th");
  expect(result.day_name).toBe("Friday");
  expect(result.year).toBe("2022");
  expect(result.hour).toBe("9");
  expect(result.min).toBe("59");
  expect(result.sec).toBe("18");
  expect(result.amOrpm).toBe("am");
});
