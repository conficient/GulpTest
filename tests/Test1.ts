/// <reference path="../typings/tsd.d.ts" />

/* jslint node: true */
/* global describe, it, expect */

"use strict";

/**
 * Basic tests (not currently referencing the source)
 */
describe("test 1", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });

    it("test failure", function() {
        expect(true).toBe(false);
    });
    
    // it("greeter returns hello world", ()=> {
    //     var g = new Greeter();
    //     var text =g.SayHello(); 
    //     expect(text).toBe("Hello World");
    // });
});
