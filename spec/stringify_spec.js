var func = require('../stringify.js');

describe('stringify', function () {
  it("takes string and returns string", function() {
    expect(func.stringify("string")).toEqual(JSON.stringify("string"));
  });
  it("takes a number and returns a string", function() {
    expect(func.stringify(5)).toEqual(JSON.stringify(5));
  });
  it("takes a boolean and returns a string", function() {
    expect(func.stringify(true)).toEqual(JSON.stringify(true));
  });
  it("takes undefined and returns undefined", function() {
    expect(func.stringify(undefined)).toEqual(JSON.stringify(undefined));
  });
  it("takes a function and returns undefined", function() {
    expect(func.stringify(Math.sin)).toEqual(JSON.stringify(Math.sin));
  });
  it("takes a a key value pair and returns JSON data", function() {
    expect(func.stringify(
    {
      hello: "world",
      foo: "bar"
    }
  )).toEqual(JSON.stringify(
    {
      hello: "world",
      foo: "bar"
    }
    ));
  });
});
