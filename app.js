// Function Declaration
function sayHello() {
  console.log("hello");
}

sayHello();

//Function Expression
//this is called an anonymous function, technically doesn't have a function name.

var sayBye = function() {
  console.log("Bye");
};

sayBye();

// new topic

function sing(song) {
  console.log(song);
}
sing("lalalala");
sing("hellooo");
sing("backstreets back alright!");

function multiply(a, b) {
  //   console.log(a, b);
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}

var a = multiply(5, 10);
console.log(a);

console.log(multiply(3, 4));
