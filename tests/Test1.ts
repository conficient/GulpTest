
var describe:any; //:(name:string,test:():void):void;
var it: any;
var expect: any;

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it("test failure", function() {
    expect(true).toBe(false);
  });
});