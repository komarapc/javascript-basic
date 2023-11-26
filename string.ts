const message = "Hello World";
const username = "Jack";

// string operation

const message2 = `${message} ${username}`;
console.log(message + username);
console.log(message2.substring(0, 3));
console.log(message2.split(" "));

console.log(message2.split(" ").join("-").toLowerCase());
