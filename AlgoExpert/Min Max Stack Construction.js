// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor(){
		this.array = [];
		this.min = +Infinity;
		this.max = -Infinity;
	}
	
  peek() {
		let len = this.array.length;
    return len > 0 ? this.array[len - 1] : null;
  }

  pop() {
		let el = this.array.pop();
		if(el == this.max){
			this.max = -Infinity;
			for(let n of this.array)
				if(n > this.max) 
					this.max = n;
		}
		
		if(el == this.min){
			this.min = +Infinity;
			for(let n of this.array)
				if(n < this.min) 
					this.min = n;
		}
		
    return el;
  }

  push(number) {
		if(number < this.min) 
			this.min = number;
		if(number > this.max) 
			this.max = number;
		
    this.array.push(number);
  }

  getMin() {
    return this.min != +Infinity ? this.min : null;
  }

  getMax() {
    return this.max != -Infinity ? this.max : null;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
