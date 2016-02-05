///<reference path="../typings/jasmine/jasmine.d.ts"/>

import * as jasmine from "../node_modules/jasmine/lib/jasmine";


describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });

    it("test failure", function() {
        expect(true).toBe(false);
    });
});

