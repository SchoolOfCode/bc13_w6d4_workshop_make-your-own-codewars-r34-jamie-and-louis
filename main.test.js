//👉 Write your tests below here:
import { findLargestInArray } from "./main.js";
import { test, expect } from "@jest/globals";

describe("Largest in an array", () => {
  test("Answer should be 20", () => {
    expect(findLargestInArray([2, 3, 6, 1, 7, 20, 3])).toBe(20);
  });

  test("If negative numbers passed", () => {
    expect(findLargestInArray([-1, -10, -100, -200])).toStrictEqual(-1);
  });

  test("Check mixture of positive and negative numbers", () => {
    expect(findLargestInArray([10, -10, 20, -30])).toStrictEqual(20);
  });

  test("Check all 0s", () => {
    expect(findLargestInArray([0, 0, 0, 0])).toStrictEqual(0);
  });

  test("If negative numbers passed - with Strings", () => {
    expect(findLargestInArray(["-1", -10, "-100", -200])).toStrictEqual(-1);
  });
});
