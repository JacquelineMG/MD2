const string = `{"I am a": "string"}`;

const result1 = JSON.parse(string);

console.log(typeof result1);

console.log(typeof JSON.stringify(result1));

console.log("-----------------------------------------");

const jsonString = `{"a":1, "b":2, "foo":"bar"}`;
console.log(typeof jsonString, jsonString);

const obj = JSON.parse(jsonString);
console.log(typeof obj, obj);

delete obj.foo;
console.log(typeof obj, obj);

const reObj = JSON.stringify(obj);
console.log(typeof reObj, reObj);