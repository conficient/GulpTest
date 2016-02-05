"use strict";
describe("test 1", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
    it("test failure", function () {
        expect(true).toBe(false);
    });
});
