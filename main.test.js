//👉 Write your tests below here:
import { findLargestInArray } from "./main.js";
import { test, expect } from "@jest/globals";


test("Answer should be 20", () => {
    expect(findLargestInArray([2,3,6,1,7,20,3])).toBe(20);
});