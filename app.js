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

// New Topic keyless car challenge

// Function Declaration
function checkDriverAge() {
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
}

// console.log(checkDriverAge(20));

// Function Expression
checkDriverAge2 = function() {
  var age = prompt("What is your age?");

  if (Number(age) < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
  } else if (Number(age) > 18) {
    alert("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
  }
};

// console.log(checkDriverAge2);

function checkDriverAgeWithArgument(age) {
  if (Number(age) < 18) {
    return "Sorry, you are too yound to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

checkDriverAgeWithArgument(22);
