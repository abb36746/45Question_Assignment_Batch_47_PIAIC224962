"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default 
// with a message that reads I love TypeScript. Make a large shirt and a medium 
// shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`Size: ${size}, Message: '${message}'`);
}
// large shirt with default message
makeShirt();
// medium shirt with default message
makeShirt("Medium");
// custom shirt whit defferent massage and size
makeShirt("Small", "Hello, TypeScript!");
