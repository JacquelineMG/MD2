const string = `{"I am a": "string"}`;

const result1 = JSON.parse(string);

console.log(typeof result1);

console.log(typeof JSON.stringify(result1));

console.log("-----------------------------------------");