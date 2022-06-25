class Stack {
    constructor(){
        this.items = [];
    }

    push(elemant){
        this.items.push(elemant);
    }

    pop(){
       return this.items.pop();
    }
    
    isEmpty(){
        return this.items.length == 0 ;
    }

    clear(){
        return this.items = [];
    }

    peak(){
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack ();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.peak());
stack.clear();
console.log(stack);
