const os = require("os");
const fs = require("fs");
const path = require("path");
const http = require("http");
const crypto = require("crypto");

// console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(os.homedir());
console.log(os.tmpdir());

// Hoisting
console.log(a);
console.log(someFunc);
console.log(SomeClass);
var a = "a string";
function someFunc() {}
class SomeClass {}
