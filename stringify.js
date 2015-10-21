// Implement a function called stringify that emulates JSON.stringify

function stringify(input) {
  if (typeof(input) === "string") {
    return '"' + input + '"';
  }
  else if (typeof(input) === "number" || typeof(input) === "boolean") {
    return input.toString();
  }
  else if (typeof(input) === "undefined" || typeof(input) === "function") {
    return undefined;
  }
  else {
    // extract keys from key value pairs
    var keys = Object.keys(input);
    var array = [];
    for (var i = 0; i < keys.length; i++) {
      // make each key a string
      var keyString = '"' + keys[i] + '":';
      // extract value
      var value = input[keys[i]];
      typeof(value) === "string" ? keyString = keyString + '"' + value + '"' : keyString = keyString + stringify(value)
      array.push(keyString);
    }
    return "{" + array.join(",") + "}";
}
}

module.exports = {
  stringify: stringify
}
