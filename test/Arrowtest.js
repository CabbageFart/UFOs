//Arrow functions
//# 1
function printHello() {
    return "Hello there!";
  }
// is equal to
printHello = () => "Hello there!";

printHello();

//# 2
function addition(a, b) {
    return a + b;
  }
// is equal to
addition = (a, b) => a + b;

addition(4,5);

//# 3
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
// is equal to
doubleAddition = (c, d) => addition(c, d) * 2;

doubleAddition(9,8);

