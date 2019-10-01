class Stack {
  constructor() {
    this.myvar = [];
    this.push = function(e) {
      this.myvar.push(e);
    };
    this.pop = function() {
      return this.myvar.pop();
    };
    this.peek = function() {
      return this.myvar[this.getSize() - 1];
    };
    this.getSize = function() {
      return this.myvar.length;
    };
    this.isEmpty = function() {
      return this.myvar.length == 0;
    };
    this.multiPop = function(n) {
      if (n <= this.myvar.getSize) {
        for (s = 0; s < n; s++) {
          this.myvar.pop;
        }
        console.log(this.myvar);
      } else {
        alert("Index out of Bound!!");
      }
    };
  }
}
