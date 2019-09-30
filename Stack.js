class Stack {
  constructor() {
    this.myvar = [];
    // Push an element to the stack
    this.push = function(e) {
      this.myvar.push(e);
    };
    // Pop the top  from the stack
    this.pop = function() {
      return this.myvar.pop();
    };
    // Peek the top from the stack
    this.peek = function() {
      return this.myvar[this.getSize() - 1];
    };
    // Return the stack size
    this.getSize = function() {
      return this.myvar.length;
    };
    // Return true if stack is empty
    this.isEmpty = function() {
      return this.myvar.length == 0;
    };
  }
}
